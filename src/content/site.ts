// ============================================================
// Site-wide copy & data. Locked language from the prototype +
// onepager. Edit text here, not in markup.
// ============================================================

export const site = {
  name: "Dayspring",
  // default per-page <title> tagline & description live in each page;
  // these are the global fallbacks / brand-level strings.
  tagline: "See who you're becoming.",
  description:
    "A private AI journal for reflective Christians. Write each day; Dayspring turns it into a year-long mirror so you can see who you're becoming.",
  url: "https://dayspring.app",
  verse: {
    text: "…the dayspring from on high hath visited us.",
    ref: "Luke 1:78",
  },
} as const;

// download pills (iOS + macOS) in the nav and CTAs.
// macOS: the href is a no-JS fallback to the latest release PAGE; a small
// progressive-enhancement script (Nav.astro) resolves the exact latest .dmg
// at runtime via the GitHub API and rewrites the href to a direct download.
// iOS: not shipped yet — rendered as a non-clickable "coming soon" pill.
export const releasesRepo = "phillipchan1/dayspring-releases";

export const downloads = {
  ios: { label: "iOS", comingSoon: true, soonLabel: "Soon" },
  macos: {
    label: "macOS",
    // no-JS / fallback target: GitHub's "latest release" page
    href: `https://github.com/${releasesRepo}/releases/latest`,
  },
} as const;

// primary nav links (text collapses on mobile; pills stay)
export const navLinks = [
  { label: "Why we built it", href: "/why" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
] as const;

// footer link rows
export const footerLinks = [
  { label: "Why we built it", href: "/why" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "A note from the maker", href: "/maker" },
  { label: "Dayspring © 2026", href: "/" },
] as const;

// ---- pricing tiers (Annual is featured / "Most chosen") ----
export const pricingTiers = [
  {
    name: "Open Page",
    price: "$0",
    unit: null,
    note: "free, forever",
    desc:
      "The full editor, focus mode, and your private journal. Write as much as you like — no limits, no nagging.",
    cta: { label: "Start writing", href: "#", style: "line" },
    featured: false,
  },
  {
    name: "Dayspring Annual",
    price: "$59",
    unit: " / year",
    note: "about $4.92 / month",
    desc:
      "Everything in Open Page, plus the full insight layer — weekly, monthly, and the yearly mirror. The longer you write, the more it gives back.",
    cta: { label: "Begin the year", href: "#", style: "solid" },
    featured: true,
    badge: "Most chosen",
  },
  {
    name: "Monthly",
    price: "$8",
    unit: " / month",
    note: "cancel anytime",
    desc:
      "The full insight layer, month to month. A gentle way to try it before you commit to the long walk.",
    cta: { label: "Start monthly", href: "#", style: "line" },
    featured: false,
  },
] as const;

// honest comparison line — no competitor named on-site
export const pricingHonest =
  "Less than the leading AI journal — and the only one that reflects with you across years.";
