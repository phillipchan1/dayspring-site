// Site-side PostHog — the Entrance funnel plus page analytics.
//
// Ported from phillipchan1/dayspring site/src/lib/siteAnalytics.ts
// (dayspring#131). Init is a no-op when PUBLIC_POSTHOG_KEY is unset at
// build time — Astro inlines `import.meta.env.PUBLIC_*`.

import posthog from 'posthog-js'

const KEY = import.meta.env.PUBLIC_POSTHOG_KEY as string | undefined
const HOST = (import.meta.env.PUBLIC_POSTHOG_HOST as string | undefined) || 'https://us.i.posthog.com'

let initialized = false

function ensureInit(): void {
  if (initialized || !KEY) return
  initialized = true
  posthog.init(KEY, {
    api_host: HOST,
    autocapture: false,
    // Static MPA: no View Transitions / ClientRouter. Prefetch (astro.config
    // prefetchAll) only fetches HTML — it never runs this module — so one
    // $pageview per real navigation and no extras. If ClientRouter is added
    // later, switch this to 'history_change' so soft navigations aren't missed.
    capture_pageview: true,
    capture_pageleave: true,
    disable_session_recording: false,
    rageclick: false,
    session_recording: {
      maskAllInputs: true,
    },
  })
}

/**
 * Init on every site page — not only when a custom Entrance event fires.
 * Safe to call more than once; a no-op without PUBLIC_POSTHOG_KEY.
 */
export function initSiteAnalytics(): void {
  ensureInit()
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

/** UTM params on the current URL — the only free text this module ever sends. */
function utmProps(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) out[key] = v
  }
  return out
}

export type SiteEvent =
  | 'landing_viewed'
  | 'intent_clicked'
  | 'start_trial_clicked'
  /** A Mac .dmg click. The primary CTA since the site stopped selling the web app. */
  | 'download_clicked'
  /** An App Store link click. The listing is Apple's, so this is the last signal we get. */
  | 'app_store_clicked'

export function trackSite(event: SiteEvent): void {
  ensureInit()
  if (!KEY) return
  posthog.capture(event, utmProps())
}

/**
 * Progressively enhances every on-page link to /start: carries this page's
 * full query string onward (UTMs, but also fbclid/gclid — whatever arrived,
 * not just the five utm_* keys) and fires `intent_clicked` on the way out.
 */
export function wireCtaLinks(): void {
  const search = window.location.search
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href="/start"]')
  links.forEach((a) => {
    if (search) a.href = `/start${search}`
    a.addEventListener('click', () => trackSite('intent_clicked'), { once: true })
  })
}
