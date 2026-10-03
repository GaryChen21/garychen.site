/**
 * Central identity / branding configuration.
 *
 * ⚠️ This is STATIC, CODE-BASED configuration (NOT environment variables).
 *    Personal data lives here so it is versioned and reusable without env
 *    juggling. Edit the values below and rebuild.
 *
 * This module is intentionally PURE (no `import.meta.env`) so it can be
 * imported from BOTH the browser app AND the Vite Node build config
 * (vite.config.ts) that generates the <head>, sitemap.xml and robots.txt.
 */

/** Brand name used across UI, metadata and structured data. */
export const BRAND_NAME = "Gary Chen";

/** Owner's full name. */
export const OWNER_NAME = "Gary Chen";

/** Owner's online alias / handle (without the leading @). */
export const OWNER_ALIAS = "garychen";

/** Job title / role. */
export const JOB_TITLE = "Computer Science student specializing in Cloud Technology and AI Enthusiast";

/** Short headline / tagline used in metadata. */
export const HEADLINE =
  "Gary Chen is a Computer Science student specializing in Cloud Technology and an AI Enthusiast.";

/** Years of professional experience (number). */
export const YEARS_OF_EXPERIENCE = 5;

/** Country of origin / operation. */
export const COUNTRY = "Indonesia";

/** ISO country code (e.g. "ID"). */
export const COUNTRY_CODE = "ID";

/** Spoken languages. */
export const LANGUAGES = ["English", "Bahasa Indonesia"];

/** Public contact email address. */
export const CONTACT_EMAIL = "garychen8899chen@gmail.com";

/** Secondary / business email address. */
export const BUSINESS_EMAIL = "garychen8899chen@gmail.com";

/** Public contact phone number (E.164 format recommended). */
export const CONTACT_PHONE = "";

/** WhatsApp number in international format without "+" (for wa.me links). */
export const WHATSAPP_NUMBER = "0895388733328";

/** X / Twitter handle (with leading @). */
export const TWITTER_HANDLE = "@garychen";

/** Optional Google Analytics measurement ID (e.g. "G-XXXXXXXXXX"). Empty disables it. */
export const GA_MEASUREMENT_ID = "G-FTJ2LRGE5P";

/** Canonical site origin (no trailing slash). Used for canonical/OG/JSON-LD URLs. */
export const SITE_ORIGIN = "https://garychen.com";

/** Social profile URLs. */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/garych3n/",
  tiktok: "https://www.tiktok.com/@garychen",
  youtube: "https://www.youtube.com/@garychen",
  linkedin: "https://www.linkedin.com/in/gary-chenn",
  github: "https://github.com/GaryChen21",
  threads: "https://www.threads.com/@garych3n",
};

/** Resume PDF paths (served from /public). */
export const RESUME = {
  creativeEn: "/pdf/Gary_Chen-Creative_Resume-en.pdf",
  creativeId: "/pdf/Gary_Chen-Creative_Resume-id.pdf",
  atsEn: "/pdf/Gary_Chen-Resume-en.pdf",
  atsId: "/pdf/Gary_Chen-Resume-id.pdf",
};

/** Company / business brand details (for services & linktree). */
export const COMPANY = {
  name: "IARTY",
  url: "https://iarty.biz.id",
  aiUrl: "https://ai.iarty.biz.id",
  educationUrl: "https://education.iarty.biz.id",
  marketplaceUrl: "https://marketplace.iarty.biz.id",
  templatesUrl: "https://iarty.biz.id/templates",
  image: "/img/iarty.webp",
};

/** Build a wa.me link from the configured WhatsApp number. */
export const whatsappUrl = (message?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/** Build a mailto: link for the configured contact email. */
export const mailtoUrl = (email: string = CONTACT_EMAIL): string => `mailto:${email}`;
