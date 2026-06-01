// ============================================================
// Home page copy. Locked language from dayspring-prototype.html.
// Edit prose here; index.astro stays structural.
// Inline <em>…</em> marks accented (italic/gold) phrases.
// ============================================================

export const hero = {
  eyebrow: "For the inner life — and the long walk",
  lines: ["See who", "you're <em>becoming.</em>"],
  sub: "A private journal that turns what you write each day into a year-long mirror — so you can finally see how far you've come, not just how you feel today.",
  verse: {
    text: "…the dayspring from on high hath visited us.",
    ref: "Luke 1:78",
  },
  primary: { label: "Start writing — free", href: "#" },
  ghost: { label: "Why we built this →", href: "/why" },
};

// problem line — `today` is highlighted in rose italic
export const problem = {
  before: "Every other journal keeps you in ",
  highlight: "today",
  after: " — today's mood, today's prompt, today's verse. None of them show you the arc.",
};

// the editor showcase
export const editor = {
  tag: "The editor",
  heading: "A page worth <em>returning to.</em>",
  lead: "No clutter, no nagging, no cartoon streaks — just a beautiful, full-screen page. Typewriter scrolling, the themes and fonts you'd find in a code editor, and zero lag between thought and word.",
  mock: {
    file: "march-14.md",
    meta: ["Focus mode", "JetBrains Mono"],
    day: "Friday · March 14",
    lines: [
      "Hard conversation with Marcus today.",
      "I went in defensive and left grateful — not sure when that shifted.",
      "I've been praying about patience for months now.",
      "Maybe this was an answer I almost walked past.",
    ],
    themes: [
      { name: "One Dark", color: "#282c34" },
      { name: "Nord", color: "#2e3440" },
      { name: "Gruvbox", color: "#282828" },
      { name: "Paper", color: "#ece7dd" },
    ],
  },
  phone: {
    day: "3 wins · today",
    wins: [
      "Didn't snap at the dinner table.",
      "Called Dad back.",
      "Wrote before I checked my phone.",
    ],
  },
};

// the year-in-review / "letter" — the hero feature
export const yearInReview = {
  tag: "The hero feature",
  heading: "Letters to yourself, <em>not reports.</em>",
  lead: "Each week, month, and year, Dayspring reads back what you wrote and tells you what changed — in your own story, not a chart. By year's end, you have an honest mirror of who you were, and who you've become.",
  letter: {
    kind: "Monthly reflection",
    period: "March",
    title: "What changed in you this month",
    paragraphs: [
      "You started March bracing for the worst. By the third week, something settled — you wrote less about fear and more about the people in front of you.",
      "The patience you've been praying for? <em>It showed up in small places</em> — the dinner table, the long call with your brother.",
    ],
    signature: "— Dayspring, looking back with you",
  },
};

// formation — the unmistakable, tasteful tell (Section 3)
export const formation = {
  tag: "Formation",
  heading: "Track the things that never make it onto a <em>to-do list.</em>",
  lead: "Are you growing in patience? Is your prayer life deepening? Is what you believe finally moving from your head to your heart? These are the changes that matter most and are hardest to see day to day. Dayspring watches for them over time, gently — and shows you the movement.",
  // the native mock: qualities tracked across a season, movement in words — never charts or streaks
  mock: {
    label: "Formation",
    season: "This season",
    qualities: [
      { name: "Patience", movement: "showing up in smaller moments", dir: "up" },
      { name: "Prayer", movement: "less asking, more listening", dir: "up" },
      { name: "Fear", movement: "quieter than it was in spring", dir: "down" },
      { name: "Head to heart", movement: "what you know is starting to land", dir: "up" },
    ],
  },
};

// the Gain — not the Gap
export const gain = {
  quote:
    "Measure backward, not forward. You'll be surprised how far grace has carried you.",
  attribution: "The Gain · not the Gap",
};

// bring your history — cold-start killer (Section 5)
export const bringHistory = {
  tag: "Bring your history",
  heading: "Years of journaling, <em>brought with you.</em>",
  lead: "Already keep a journal in Day One or Diarly? Import it, and Dayspring hands you a look back at last month — and last year — on your very first day. Nothing starts from scratch.",
  mock: {
    sources: ["Day One", "Diarly", "Markdown"],
    imported: "1,240 entries imported",
    ready: "Your first look back is ready.",
  },
};

// privacy as stewardship (Section 6) — carries the single unmistakable faith line
export const privacy = {
  tag: "Privacy as stewardship",
  heading: "Some things are meant to be written <em>before they're ever spoken aloud.</em>",
  body: "Your entries are encrypted, never sold, and never used to train AI. No one else can reach your journal. And when something is too tender even for that, turn on the Private Vault — locked with a key only you hold. We can't read it. Neither can the AI.",
  // the one unmistakable line, placed with confidence
  line: "It's just between you and God.",
  vault: { label: "Private Vault", state: "Locked · key only you hold" },
};

export const pricing = {
  tag: "Pricing",
  heading: "Free to begin. <em>Worth more with time.</em>",
  lead: "The page is free, forever. The reflections — the part that shows you the arc — are what you grow into.",
};
