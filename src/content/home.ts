// ============================================================
// Home page copy. Locked language from dayspring-prototype.html.
// Edit prose here; index.astro stays structural.
// Inline <em>…</em> marks accented (italic/gold) phrases.
// ============================================================

export const hero = {
  eyebrow: "For the inner life — and the long walk",
  lines: ["See who you're", "<em>becoming.</em>"],
  sub: "A private journal that turns what you write each day into a year-long mirror — so you can finally see how far you've come, not just how you feel today.",
  verse: {
    text: "…the Dayspring from on high has visited us",
    ref: "Luke 1:78",
  },
  primary: { label: "Start your 14-day trial", href: "#" },
  ghost: { label: "Why we built it →", href: "/why" },
  /** Shown beneath the hero app mock — one quiet editor promise. */
  mockCaption: "A page worth returning to.",
  /** Hero mock — the editor only; capture lives in the writing glimpse below. */
  appMock: {
    open: {
      date: "march 14",
      status: "112 words · saved just now · synced",
      title: "Hard conversation with Marcus",
      body: [
        "I went in defensive and left grateful — not sure when that shifted.",
        "I've been praying about patience for months now.",
      ],
    },
  },
};

// problem line — `today` is highlighted in rose italic
export const problem = {
  before: "Every other journal keeps you in ",
  highlight: "today",
  after: " — today's mood, today's prompt, today's verse. You can capture a moment, but none of them show you the arc. A day is too small to hold a pattern. A year is a mirror.",
};

// slash commands — kept for /features; home uses conveniences + WritingGlimpse
export const slashCommands = {
  tag: "Slash commands",
  heading: "Type <em>/</em>. Plant what matters without leaving the page.",
  lead: "Five commands, right in the line you're writing — no sidebar, no prompt-of-the-day.",
  bridge:
    "What you plant doesn't disappear: it maps on the Lamp and feeds the Ascent over time.",
  commands: [
    {
      id: "scripture",
      label: "/scripture",
      hint: "Find relevant Bible passages",
      blurb: "Passages from what you've written — or search by topic. ESV, inline. Every reference becomes part of your canon map.",
    },
    {
      id: "pray",
      label: "/pray",
      hint: "Log a prayer",
      blurb: "Log a prayer without breaking the flow. Type optional; never required.",
    },
    {
      id: "sense",
      label: "/sense",
      hint: "Record a word or impression",
      blurb: "A word or impression, before it slips away.",
    },
    {
      id: "practice",
      label: "/practice",
      hint: "Tried and true forms for the inner life",
      blurb: "Browse contemplative writing forms — Examen, Lectio, lament, discernment — and begin with a structure that knows where to start without telling you what to say.",
    },
    {
      id: "image",
      label: "/image",
      hint: "Add a photo to this entry",
      blurb: "Drop or paste a photo inline. It lives in the entry, not in a sidebar.",
    },
  ],
  editorLines: [
    "I went in defensive and left grateful — not sure when that shifted.",
    "I've been praying about patience for months now.",
  ],
};

// The page you write on — scan-first copy; the glimpse shows one moment.
export const writingPage = {
  tag: "The editor",
  heading: "A page worth <em>returning to.</em>",
  lead: "Full-screen, zero lag, nothing nagging you. When you need scripture, a prayer, or somewhere to begin — type <em>/</em> and stay in the sentence.",
  bridge:
    "What you plant doesn't disappear: it maps on the Lamp and feeds the Ascent over time.",
  conveniences: [
    {
      command: "/scripture",
      title: "Can't place the verse?",
      body: "Describe what you're reaching for — even loosely — and Dayspring finds it from what you've written. Every passage you use lights up on the Lamp.",
    },
    {
      command: "/pray",
      title: "Words won't come?",
      body: "Plant a prayer mid-sentence. Nothing required beyond what you want to say. It stays with the entry and feeds the Ascent over time.",
    },
    {
      command: "/practice",
      title: "Need somewhere to begin?",
      body: "Ancient rituals that have grounded believers for centuries — Examen, Lectio, lament. A structure that knows where to start without telling you what to say.",
    },
  ],
  glimpse: {
    line: "I've been praying about patience for months now.",
    fuzzy: "patient with difficult people",
    match: { ref: "James 1:19", text: "quick to hear, slow to speak, slow to anger…" },
    canon: ["Psalm 23:2", "James 1:19", "Romans 8:28"],
  },
};

// Rituals — contemplative writing forms (/practice). Full library on /features.
export const practices = {
  tag: "Rituals",
  heading: "Ancient forms, when you need somewhere to <em>begin.</em>",
  lead: "Not a prompt of the day — writing rituals gathered from two thousand years of the inner life. Type <em>/practice</em>, pick a form, and write into gentle scaffolding that knows where to begin without telling you what to say.",
  rituals: [
    {
      name: "The Daily Examen",
      era: "Ignatius · 16th c.",
      note: "Where was I consoled? Where did I resist grace?",
    },
    {
      name: "Lectio Divina",
      era: "Benedict · 6th c.",
      note: "Read. Meditate. Pray. Contemplate.",
    },
    {
      name: "Psalmic Lament",
      era: "The Psalter",
      note: "Complain honestly. Ask boldly. Trust anyway.",
    },
  ],
  foot: "Nine forms today — Examen, Lectio, SOAP, lament, recollection, and more.",
  // retained for /features deep dive
  filters: ["All", "Examine", "Encounter", "Listen", "Lament", "Gratitude", "Form"],
  cards: [
    {
      function: "Examine",
      name: "The Daily Examen",
      origin: "Ignatius of Loyola, 16th century",
      tradition: "Ignatian",
      quote: "Where was I consoled today? Where did I resist grace?",
    },
    {
      function: "Encounter",
      name: "Lectio Divina",
      origin: "Benedict of Nursia, 6th century",
      tradition: "Benedictine",
      quote: "Read. Meditate. Pray. Contemplate. Let the Word find you.",
    },
    {
      function: "Lament",
      name: "Psalmic Lament",
      origin: "Ancient — the Hebrew Psalter",
      tradition: "Hebrew",
      quote: "Address God. Complain honestly. Ask boldly. Trust anyway.",
    },
    {
      function: "Listen",
      name: "Ignatian Discernment",
      origin: "Ignatius of Loyola, 16th century",
      tradition: "Ignatian",
      quote: "Which choice brings deeper peace? Not comfort — peace.",
    },
  ],
  active: {
    name: "The Daily Examen",
    prompts: [
      {
        label: "Gratitude",
        question: "What am I grateful for from today — even one small thing?",
        answer: "The conversation with Marcus — it went better than I feared.",
      },
      {
        label: "Awareness",
        question: "Where did I feel most alive? Where most distant from God?",
        placeholder: "Consolation and desolation, honestly…",
      },
    ],
  },
  note: "Nine forms today — Examen, Lectio, SOAP, lament, recollection, and more.",
};

// the editor — craft details (mock lives in hero; no second full app screenshot)
export const editor = {
  tag: "The editor",
  heading: "A page worth <em>returning to.</em>",
  lead: "No clutter, no nagging, no cartoon streaks. A full-screen page that gets out of your way — typewriter scrolling that keeps your line at eye level, a light or dark surface set in the writing face you prefer, and zero lag between thought and word. The kind of page you actually want to open.",
  highlights: [
    {
      title: "Focus mode",
      body: "Everything but your words disappears. Typewriter scroll keeps the line you're on at eye level, and the lines above quietly dim.",
    },
    {
      title: "Yours to set",
      body: "Light or dark, following your system if you like. Six writing faces — Newsreader, Fraunces, iA Writer, JetBrains Mono, and more — each with your own size, line height, and measure.",
    },
    {
      title: "Keyboard-first",
      body: "Markdown-native, continuous autosave, no perceptible lag between thought and word.",
    },
  ],
  mock: {
    file: "march-14.md",
    meta: ["Focus mode", "iA Writer Duo"],
    day: "Friday · March 14",
    lines: [
      "Hard conversation with Marcus today.",
      "I went in defensive and left grateful — not sure when that shifted.",
      "I've been praying about patience for months now.",
      "Maybe this was an answer I almost walked past.",
    ],
    fonts: [
      { name: "Newsreader", color: "#1b1c22" },
      { name: "Fraunces", color: "#23242b" },
      { name: "iA Writer", color: "#1b1c22" },
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

// The Ascent — not four reports, but elevation over one terrain. The stable
// dimensions (your words, the scripture you reached for, the prayer you kept,
// what you're coming to see) persist as you climb Valley → Summit and only
// change resolution. The higher you go, the less the app interprets: it
// arranges, then names tentatively, then only asks, then goes nearly silent.
export const lookingBack = {
  tag: "The Ascent",
  heading: "The same terrain, from four <em>altitudes.</em>",
  lead: "Not four reports — elevation over one landscape. Your words, the verses you reached for, the prayers you kept. Climb from Valley to Summit, and the higher you go, the less Dayspring says — it arranges, then asks, then goes quiet and hands you back your own words.",
  caption:
    "Looking back down the year — the trail lit by the ropes you climbed past.",
  glimpse: {
    altitudes: [
      { label: "Week", alt: "Valley" },
      { label: "Month", alt: "Hillside" },
      { label: "Quarter", alt: "Ridge" },
      { label: "Year", alt: "Summit" },
    ],
    activeAlt: "Summit",
    activeLabel: "Year",
    oneLine: "I went in defensive and left grateful.",
    verseRef: "James 1:19",
    hint: "In the app — climb week to year",
  },
  // the persistent "watching this season" attention row, shown above every altitude
  lenses: ["gain", "gratitude", "scripture", "work", "family"],
  horizons: [
    {
      id: "week",
      label: "Week",
      alt: "Valley",
      title: "Standing in the days.",
      line: "Close to the ground — your own words, in the order you lived them. The app only arranges.",
      dimensions: [
        {
          eyebrow: "Your words · in order",
          body: "Monday, bracing for the worst. Thursday, the hard conversation with Marcus. Friday — <em>I left grateful, and I'm not sure when that shifted.</em>",
        },
        {
          eyebrow: "What you reached for",
          ref: "James 1:19",
          body: "Quick to hear, slow to speak, slow to anger.",
          meta: "in 2 entries",
        },
      ],
      voice: "In order, nothing interpreted yet — you're close enough to feel them.",
    },
    {
      id: "month",
      label: "Month",
      alt: "Hillside",
      title: "What you kept returning to.",
      line: "Step back, and the same dimensions resolve at month scale — named only as a question.",
      dimensions: [
        {
          eyebrow: "The lines you kept",
          body: "Less about bracing. More about the people in front of you.",
        },
        { eyebrow: "The month's recurring verse", ref: "James 1:19" },
        {
          eyebrow: "What you kept asking",
          body: "That I'd listen before I defend.",
        },
        {
          eyebrow: "You started to see…",
          body: "Patience, showing up in small places — the dinner table, the long call with your brother.",
        },
      ],
      voice: "↑ The app names what seems to connect — tentatively. Each is yours to rename or wave off.",
    },
    {
      id: "quarter",
      label: "Quarter",
      alt: "Ridge",
      title: "The season, distilled.",
      line: "From the ridge the season distills — and the app holds it up and hands it back.",
      dimensions: [
        {
          eyebrow: "The phrases you circled",
          body: "less bracing · more showing up · slow to speak",
        },
        {
          eyebrow: "The season's anchor passage",
          ref: "James 1",
          meta: "returned to all spring",
        },
        {
          eyebrow: "The prayer, and first signs",
          before: "Soften my heart toward Marcus.",
          after: "I went in defensive and left grateful.",
          when: "first signs",
        },
        {
          eyebrow: "What you now hold",
          body: "Patience isn't summoned. It arrives while you're busy showing up.",
        },
      ],
      voice: "↑ The app asks; it never answers. These go back to you, and to God — not to a verdict.",
    },
    {
      id: "year",
      label: "Year",
      alt: "Summit",
      title: "Looking back down the year.",
      line: "The quietest ground — your own words and the stones you set. The app nearly disappears.",
      dimensions: [
        {
          eyebrow: "The one line of the year",
          body: "I went in defensive and left grateful.",
          emphasis: true,
        },
        { eyebrow: "The verse of the year", ref: "James 1:19" },
        {
          eyebrow: "The prayer, and the Ebenezer",
          before: "Soften my heart toward Marcus.",
          after: "I left grateful.",
          when: "March → November",
        },
      ],
      closing: "Looking back down the trail — what did He teach you this year?",
    },
  ],
};

// Altar — coming-soon teaser on the homepage. (`mock` data is retained for the
// separate /features deep dive; the home page now shows only the quiet teaser.)
export const altar = {
  tag: "Altar · Coming soon",
  heading: "Seeds planted in <em>time.</em>",
  lead: "Not a prayer to-do list. The prayers you keep carrying, gathered like stones into a cairn — and when God meets you in one, however He moves, you mark the place. A way to remember that, thus far, the Lord has helped. Coming soon.",
  mock: {
    subtitle: "Thus far the Lord has helped",
    // each cairn is a recurring prayer; height = how often you've returned,
    // a lit capstone = an encounter you've named. Tall + unlit = still carrying.
    cairns: [
      { label: "Patience", stones: 5, lit: true, movement: "he changed me" },
      { label: "Marcus", stones: 4, lit: true, movement: "he met me", span: "Mar → Jun" },
      { label: "Dad's health", stones: 8 },
      { label: "The move", stones: 3, lit: true, movement: "redirected" },
      { label: "Our church", stones: 2 },
    ],
    note: "Some He answered. Some He redirected. Some you're still carrying.",
  },
};

// The Lamp (Scripture) — canon heatmap (killer feature)
export const scripture = {
  tag: "The Lamp",
  heading: "Where your heart has been <em>leaning.</em>",
  lead: "Every passage you write lights up here — not a reading plan, not a coverage score. Warmth where you've lived; quiet, never guilt, where you haven't. Scrub by season and watch the hard year look nothing like spring.",
};

// Formation — the qualities that never make a to-do list (the tasteful tell).
// Movement is shown in words and a quiet directional mark — never a chart,
// percentage, or streak.
export const formation = {
  tag: "Formation",
  heading: "Track the things that never make it onto a <em>to-do list.</em>",
  lead: "Are you growing in patience? Is your prayer life deepening? Is what you believe finally moving from your head to your heart? These are the changes that matter most and are hardest to see day to day. Dayspring watches for them over time, gently — and shows you the movement.",
  mock: {
    label: "This year",
    season: "the movement",
    qualities: [
      {
        name: "Patience",
        movement: "named in January, landed by autumn",
        dir: "up",
      },
      {
        name: "Prayer",
        movement: "less performed, more honest before God",
        dir: "up",
      },
      {
        name: "Fear",
        movement: "quieter than it was in spring",
        dir: "down",
      },
      {
        name: "Head to heart",
        movement: "what you know is starting to land",
        dir: "up",
      },
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
  lead: "Already keep a journal in Day One or Diarly? Import it, and Dayspring hands you a look back at last month — and last year — on your very first day. The Lamp and the Ascent both light up from your own history. Nothing starts from scratch.",
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
  body: "Your entries are encrypted, never sold, and never used to train AI — and never read by us. What you write here is yours alone.",
  line: "It's just between you and God.",
};

export const pricing = {
  tag: "Pricing",
  heading: "Try it for two weeks. <em>Stay for the mirror.</em>",
  lead: "One premium plan — the editor, the Lamp, and the Ascent across every horizon. Start with 14 days free, then $59 a year or $8 a month.",
};
