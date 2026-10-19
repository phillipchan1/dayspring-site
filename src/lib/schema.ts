/**
 * Site-wide JSON-LD. Kept as plain objects so Organization /
 * SoftwareApplication `sameAs` can be asserted without rendering a page.
 */
import { sameAs, site } from "../content/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs,
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description: site.description,
    url: site.url,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "macOS",
    sameAs,
  };
}
