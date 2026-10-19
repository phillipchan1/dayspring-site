import { describe, expect, it } from "vitest";
import { sameAs, socialLinks } from "./site";
import { organizationSchema, softwareApplicationSchema } from "../lib/schema";

const INSTAGRAM = "https://www.instagram.com/dayspringjournal/";

describe("social links", () => {
  it("lists Instagram as an external profile", () => {
    const instagram = socialLinks.find((link) => link.name === "Instagram");
    expect(instagram).toMatchObject({
      href: INSTAGRAM,
      handle: "@dayspringjournal",
      ariaLabel: "Dayspring on Instagram",
    });
  });

  it("includes the Instagram URL in sameAs", () => {
    expect(sameAs).toContain(INSTAGRAM);
  });
});

describe("structured data", () => {
  it("puts Instagram on Organization sameAs", () => {
    const schema = organizationSchema();
    expect(schema["@type"]).toBe("Organization");
    expect(schema.sameAs).toContain(INSTAGRAM);
  });

  it("puts Instagram on SoftwareApplication sameAs", () => {
    const schema = softwareApplicationSchema();
    expect(schema["@type"]).toBe("SoftwareApplication");
    expect(schema.sameAs).toContain(INSTAGRAM);
  });
});
