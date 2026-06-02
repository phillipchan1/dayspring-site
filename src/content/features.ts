// ============================================================
// /features — editor, slash, altar, scripture, looking back.
// First Light guardrails: becoming/seasons/the arc/carried.
// ============================================================

export const featuresIntro = {
  eyebrow: "Features",
  heading: "Write. Plant scripture. <em>See the pattern.</em>",
  lead: "A journal for the long walk — slash commands in the sentence, an Altar that gathers what you plant, a Scripture view that shows where your heart has been leaning, and reflections that read like a letter.",
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
        title: "Slash commands",
        body: "Type `/` for scripture, prayer, impression, or a reminder to return. Inline glass panels, keyboard-native, dismissible. The spiritual life captured where it actually happens — in the middle of a sentence.",
      },
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
    ],
    mock: "slash",
  },
  {
    id: "altar",
    tag: "Altar",
    heading: "What you plant, <em>gathered.</em>",
    lead: "Slash commands plant seeds in the flow of writing. The Altar is where they live afterward — searchable, filterable, tied back to the entry they came from.",
    points: [
      {
        title: "Seeds planted in time",
        body: "Prayers, impressions, and scripture you marked inline stream here by month — not buried in old entries you won't think to reopen.",
      },
      {
        title: "Filter without losing the thread",
        body: "Lens by prayer, sense, or scripture. Search when you half-remember a phrase. Open the entry when you need the full context.",
      },
      {
        title: "The raw material for Scripture",
        body: "Every `/scripture` reference you keep feeds the canon map — the Altar is the stream; Scripture is the shape it makes over years.",
      },
    ],
    mock: "altar",
  },
  {
    id: "scripture",
    tag: "Scripture",
    heading: "Where your heart has been <em>leaning.</em>",
    lead: "The feature we kept reaching for and never found. Not coverage — returns. The whole Bible, lit by your journal.",
    points: [
      {
        title: "Warmth where you've lived",
        body: "Every chapter you've touched, glowing by how often you came back. Quiet where you haven't. No streak. No shame.",
      },
      {
        title: "Seasons change the picture",
        body: "Scrub to the hard year — Psalms and Lamentations. Spring — John and Philippians. The map remembers what you couldn't see yet.",
      },
      {
        title: "Your words, still there",
        body: "Tap a book. Read what you wrote the night that verse found you.",
      },
    ],
    mock: "scripture",
  },
  {
    id: "looking-back",
    tag: "Looking back",
    heading: "See who you're <em>becoming.</em>",
    lead: "Scripture shows where your heart leaned; Looking back shows who you're becoming. Four horizons — week, month, quarter, year — each reading the one beneath it.",
    points: [
      {
        title: "It compounds, the way memory does",
        body: "Your week reads your days. Your month reads your weeks. Your year reads your months. By the time the year turns, you're handed something almost no one keeps: an honest mirror.",
      },
      {
        title: "Lenses you choose",
        body: "Decide what Dayspring reflects on — the Gain, gratitude, work, family. The reflection is shaped by what you're actually paying attention to this season.",
      },
      {
        title: "Three wins, every week",
        body: "A light Sabbath stop — three wins from this week, three you're reaching for next. Enough to keep you writing until the long-horizon reflections have something to say.",
      },
    ],
    mock: "letter",
  },
];
