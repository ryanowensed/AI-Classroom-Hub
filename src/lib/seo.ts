import { SITE_NAME, SITE_URL } from "../data/site";

export function canonicalUrl(path: string) {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "The trusted compass for AI in K-12 education. Practical tools, vetted resources, and honest guidance for teachers and administrators.",
    founder: {
      "@type": "Person",
      name: "Ryan Owens",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "The AI Classroom Hub is the trusted compass for K-12 educators navigating AI in the classroom. Vetted tools, prompt libraries, policy templates, and professional development for teachers and administrators.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: canonicalUrl(input.path),
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    author: {
      "@type": "Person",
      name: "Ryan Owens",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
