// ============================================================
// /features — three deep dives: the editor, the year-in-review,
// formation. Copy synthesized from the Notion product spec, written
// to the First Light guardrails (use: becoming/formation/seasons/the
// arc/carried; never "journaling app"/streaks/"faith journey").
// ============================================================

export const featuresIntro = {
  eyebrow: "Features",
  heading: "Three things, <em>done with care.</em>",
  lead: "A page you'll want to return to. A reflection that reads like a letter. And a quiet eye on the parts of you that never make it onto a to-do list. Everything else is table stakes.",
};

// each deep dive renders with a live app-element mock (not a screenshot)
export const deepDives = [
  {
    id: "editor",
    tag: "The editor",
    heading: "A page worth <em>returning to.</em>",
    lead: "The editor is the soul of Dayspring. If it isn't a joy to write in, nothing else matters — so this is where the most care went.",
    points: [
      {
        title: "Focus mode",
        body: "Everything but your words disappears. Typewriter scrolling keeps the line you're writing at eye level; the lines above quietly dim. Just you and the page.",
      },
      {
        title: "The themes and fonts of a code editor",
        body: "One Dark, Nord, Gruvbox, Solarized — or paper and sepia when you want warmth. Pick a monospace, serif, or sans face, then set your own line height and measure.",
      },
      {
        title: "Nothing between thought and word",
        body: "Markdown-first, with no perceptible input lag and continuous autosave. Keyboard-first throughout. You'll never lose a keystroke, and you'll never wait for one.",
      },
      {
        title: "Mobile is its own thing",
        body: "Not a shrunk desktop — a thumb-reachable, keyboard-aware page for writing on the move, with the same quiet it has on your Mac.",
      },
    ],
    mock: "editor",
  },
  {
    id: "year-in-review",
    tag: "The year-in-review",
    heading: "Letters to yourself, <em>not reports.</em>",
    lead: "Each week, month, and year, Dayspring reads back what you wrote and tells you what changed — in your own words, pulled forward. Not a chart. A letter.",
    points: [
      {
        title: "It compounds, the way memory does",
        body: "Your week reads your days. Your month reads your weeks. Your year reads your months. By the time the year turns, you're handed something almost no one keeps: an honest mirror of who you were, and who you've become.",
      },
      {
        title: "Lenses you choose",
        body: "Decide what Dayspring reflects on — the Gain, gratitude, formation, work, family. The reflection is shaped by what you're actually paying attention to this season.",
      },
      {
        title: "Three wins, every day",
        body: "A light daily touch — three wins from today, three you're reaching for tomorrow. Enough to keep you writing until the long-horizon reflections have something to say.",
      },
    ],
    mock: "letter",
  },
  {
    id: "formation",
    tag: "Formation",
    heading: "Track the things that never make it onto a <em>to-do list.</em>",
    lead: "Are you growing in patience? Is your prayer life deepening? Is what you believe finally moving from your head to your heart? These are the changes that matter most and are the hardest to see day to day.",
    points: [
      {
        title: "Measured backward, never against an ideal",
        body: "Dayspring won't hold your life up against the person you think you should already be — the surest way to lose heart. It measures you against who you actually were, and shows you how far you've been carried.",
      },
      {
        title: "Movement, in words — not metrics",
        body: "No streaks, no scores, no cartoon badges. Just a quiet account of where something is shifting, the way a friend who's known you a long time would tell you.",
      },
      {
        title: "Only if you ask for it",
        body: "Formation is a lens you turn on. Leave it off and Dayspring is simply a beautiful place to write. Turn it on and it watches, gently, over seasons.",
      },
    ],
    mock: "formation",
  },
];
