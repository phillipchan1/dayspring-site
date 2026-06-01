// ============================================================
// Home page copy. Locked language from dayspring-prototype.html.
// Edit prose here; index.astro stays structural.
// Inline <em>…</em> marks accented (italic/gold) phrases.
// ============================================================

export const hero = {
  eyebrow: "For the inner life — and the long walk",
  lines: ["See who", "you're <em>becoming.</em>"],
  sub: "A private journal that turns what you write each day into reflections across the week, month, quarter, and year — so you can finally see how far you've come, not just how you feel today.",
  verse: {
    text: "…the Dayspring from on high has visited us",
    ref: "Luke 1:78",
  },
  primary: { label: "Start your 14-day trial", href: "#" },
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

// Looking back — four horizons, compounding rollups (Insight Layer v2)
export const lookingBack = {
  tag: "Looking back",
  heading: "Four horizons, <em>one arc.</em>",
  lead: "Each reflection reads the one beneath it — your own words, returned in prose. Tap a horizon.",
  horizons: [
    {
      id: "week",
      label: "Week",
      character: "The Sabbath stop",
      title: "What moved this week",
      paragraphs: [
        "Measured against last week, not an ideal — you wrote less about bracing and more about showing up. Thursday's conversation with Marcus still lingers.",
      ],
      wins: [
        {
          heading: "3 wins this week",
          items: [
            "Didn't snap at the dinner table.",
            "Called Dad back.",
            "Wrote before I checked my phone.",
          ],
        },
        {
          heading: "3 wins for next week",
          items: [
            "Stay present at dinner.",
            "One honest prayer before bed.",
            "Return to the Marcus thread.",
          ],
        },
      ],
      questions: [
        "What from Thursday is still open?",
        "Where did patience show up without you noticing?",
      ],
    },
    {
      id: "month",
      label: "Month",
      character: "The letter",
      title: "What changed in you this month",
      paragraphs: [
        "You started March bracing for the worst. By the third week, something settled — you wrote less about fear and more about the people in front of you.",
        "The patience you've been praying for? <em>It showed up in small places</em> — the dinner table, the long call with your brother.",
      ],
      signature: "— Dayspring, looking back with you",
    },
    {
      id: "quarter",
      label: "Quarter",
      character: "The retreat",
      title: "The arc you can't see from inside a week",
      paragraphs: [
        "Patience kept returning — not as a resolution, but as a thread you kept circling. Fear quieted, slowly. The same prayer showed up in March and again in June, wearing different clothes.",
      ],
      ebenezer: [
        {
          before: "Lord, soften my heart toward Marcus.",
          after: "I went in defensive and left grateful.",
          when: "March → June",
        },
      ],
      questions: [
        "What tension keeps returning that you're not yet ready to name?",
      ],
    },
    {
      id: "year",
      label: "Year",
      character: "The mirror",
      title: "Who you were · who you are",
      paragraphs: [
        "A year ago you were measuring yourself against who you thought you should already be. Now you're writing from a different place — less performance, more honesty before God.",
      ],
      themes: [
        "Patience — named in January, landed by autumn.",
        "Fear — quieter than it was in spring.",
        "Head to heart — what you know is starting to land.",
      ],
    },
  ],
};

const monthHorizon = lookingBack.horizons.find((h) => h.id === "month")!;

// kept for /features — same letter content, nested under lookingBack
export const yearInReview = {
  tag: lookingBack.tag,
  heading: lookingBack.heading,
  lead: lookingBack.lead,
  letter: {
    kind: "Monthly reflection",
    period: "March",
    title: monthHorizon.title,
    paragraphs: monthHorizon.paragraphs,
    signature: monthHorizon.signature ?? "",
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
    "Measure backward, not forward. Each horizon compares you to who you actually were — never the person you think you should already be.",
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

// privacy as stewardship — carries the single unmistakable faith line
export const privacy = {
  tag: "Privacy as stewardship",
  heading: "Some things are meant to be written <em>before they're ever spoken aloud.</em>",
  body: "Your entries are encrypted, never sold, and never used to train AI. No one else can reach your journal.",
  line: "It's just between you and God.",
};

export const pricing = {
  tag: "Pricing",
  heading: "Try it for two weeks. <em>Stay for the mirror.</em>",
  lead: "One premium plan — the editor and Looking back, every horizon. Start with 14 days free, then $59 a year or $8 a month.",
};
