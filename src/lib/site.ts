export const SITE_URL = "https://behomepartners.netlify.app";
export const SITE_NAME = "Be Home Partners";
export const SITE_LOGO = "/assets/logos/horizontal/BeHome_logo_horizontal.svg";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const AREA_SERVED = [
  "Waterloo",
  "Braine-l'Alleud",
  "Nivelles",
  "Genappe",
  "Lasne",
  "Rixensart",
  "Ittre",
  "Seneffe",
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
