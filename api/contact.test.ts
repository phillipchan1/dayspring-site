import { describe, it, expect } from "vitest";
import {
  validateContact,
  renderContactEmail,
  renderAutoReply,
  renderContactIssue,
  deliveryMode,
  type ContactMessage,
} from "./contact";

const good = {
  name: "Ruth",
  email: "ruth@example.com",
  subject: "Import stuck",
  message: "My Day One import stopped halfway through.",
  elapsedMs: 20_000,
};

const message: ContactMessage = {
  name: "Ruth",
  email: "ruth@example.com",
  subject: "Import stuck",
  message: "My Day One import stopped halfway through.",
  platform: "macOS",
  appVersion: "1.0.231",
};

describe("validateContact", () => {
  it("accepts an ordinary submission", () => {
    const r = validateContact(good);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.message.name).toBe("Ruth");
      expect(r.message.subject).toBe("Import stuck");
    }
  });

  it("defaults a missing subject rather than rejecting", () => {
    const r = validateContact({ ...good, subject: "" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.message.subject).toBe("Support request");
  });

  it("trims whitespace", () => {
    const r = validateContact({ ...good, name: "  Ruth  ", email: " ruth@example.com " });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.message.name).toBe("Ruth");
      expect(r.message.email).toBe("ruth@example.com");
    }
  });

  describe("spam", () => {
    it("silently drops anything that filled the honeypot", () => {
      const r = validateContact({ ...good, company: "Acme Marketing" });
      expect(r).toEqual({ ok: false, silent: true });
    });

    it("silently drops a submission completed impossibly fast", () => {
      const r = validateContact({ ...good, elapsedMs: 400 });
      expect(r).toEqual({ ok: false, silent: true });
    });

    it("accepts when elapsed time is missing or unparseable", () => {
      // A privacy extension or a restored tab can lose the timestamp. Dropping a
      // real person's message over that is far worse than accepting some spam.
      expect(validateContact({ ...good, elapsedMs: undefined }).ok).toBe(true);
      expect(validateContact({ ...good, elapsedMs: "nonsense" }).ok).toBe(true);
      expect(validateContact({ ...good, elapsedMs: -1 }).ok).toBe(true);
    });
  });

  describe("rejections a person should see", () => {
    it("needs a name", () => {
      const r = validateContact({ ...good, name: "   " });
      expect(r).toMatchObject({ ok: false, silent: false });
    });

    it("needs a plausible email", () => {
      for (const email of ["", "ruth", "ruth@", "@example.com", "ruth @example.com"]) {
        const r = validateContact({ ...good, email });
        expect(r, `accepted ${JSON.stringify(email)}`).toMatchObject({
          ok: false,
          silent: false,
        });
      }
    });

    it("needs a message", () => {
      const r = validateContact({ ...good, message: "" });
      expect(r).toMatchObject({ ok: false, silent: false });
    });

    it("caps an over-long message", () => {
      const r = validateContact({ ...good, message: "x".repeat(5001) });
      expect(r).toMatchObject({ ok: false, silent: false });
    });

    it("survives entirely non-string input", () => {
      const r = validateContact({ name: 42, email: null, message: {} });
      expect(r).toMatchObject({ ok: false, silent: false });
    });
  });
});

describe("renderContactEmail", () => {
  it("sets a subject that's obvious in an inbox", () => {
    expect(renderContactEmail(message).subject).toBe("[Dayspring support] Import stuck");
  });

  it("carries the sender and the context", () => {
    const { text } = renderContactEmail(message);
    expect(text).toContain("Ruth <ruth@example.com>");
    expect(text).toContain("Platform: macOS");
    expect(text).toContain("App version: 1.0.231");
  });

  it("omits context lines that aren't there", () => {
    const { text } = renderContactEmail({ ...message, platform: null, appVersion: null });
    expect(text).not.toContain("Platform:");
    expect(text).not.toContain("App version:");
  });

  it("escapes HTML so a message can't inject markup into the inbox", () => {
    const { html } = renderContactEmail({
      ...message,
      name: '<img src=x onerror="alert(1)">',
      message: "<script>alert('xss')</script>",
    });
    // Assert on live markup, not on substrings: `onerror=` legitimately appears
    // inside the escaped text `&lt;img src=x onerror=&quot;`, which is inert.
    // What must not exist is an actual tag or an attribute on a real element.
    expect(html).not.toMatch(/<script/i);
    expect(html).not.toMatch(/<img/i);
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
    // The quotes in the injected attribute must be entities, so they can't
    // terminate a real attribute value.
    expect(html).not.toContain('onerror="alert(1)"');
  });

  it("keeps a plaintext alternative alongside the HTML", () => {
    const mail = renderContactEmail(message);
    expect(mail.text).toContain("My Day One import stopped halfway through.");
    expect(mail.html).toContain("My Day One import stopped halfway through.");
  });
});

describe("renderAutoReply", () => {
  it("greets the sender and quotes what they wrote back to them", () => {
    const reply = renderAutoReply(message);
    expect(reply.subject).toBe("We got your message");
    expect(reply.text).toContain("Hi Ruth,");
    expect(reply.text).toContain("My Day One import stopped halfway through.");
  });

  it("escapes the sender's name", () => {
    const reply = renderAutoReply({ ...message, name: "<b>Ruth</b>" });
    expect(reply.html).not.toContain("<b>Ruth</b>");
    expect(reply.html).toContain("&lt;b&gt;");
  });
});

describe("renderContactIssue", () => {
  it("titles and attributes the issue", () => {
    const issue = renderContactIssue(message);
    expect(issue.title).toBe("[support] Import stuck");
    expect(issue.body).toContain("**From:** Ruth <ruth@example.com>");
    expect(issue.body).toContain("My Day One import stopped halfway through.");
  });
});

describe("deliveryMode", () => {
  it("prefers Resend when a key is present", () => {
    expect(deliveryMode("re_123", "gh_123", "owner/repo")).toBe("resend");
  });

  it("falls back to GitHub when both token and repo are set", () => {
    expect(deliveryMode(null, "gh_123", "owner/repo")).toBe("github");
  });

  it("needs both halves of the GitHub config", () => {
    expect(deliveryMode(null, "gh_123", null)).toBe("none");
    expect(deliveryMode(null, null, "owner/repo")).toBe("none");
  });

  it("reports none when nothing is configured", () => {
    // The endpoint returns 503 on "none" rather than a false success — a form
    // that silently swallows mail is worse than no form at all.
    expect(deliveryMode(null, null, null)).toBe("none");
  });
});
