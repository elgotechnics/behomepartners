import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ListingsPage } from "@/components/listings/ListingsPage";
import {
  breadcrumbSchema,
  listingItemListSchema,
  schemaJsonLd,
  SITE_URL,
} from "@/components/listings/schema";
import {
  defaultListingsView,
  pageUrl,
  paginateListings,
  parsePageParam,
} from "@/components/listings/paginate";

const URL_PATH = "/a-louer";
const BASE_TITLE = "Biens à louer en Brabant wallon";
const BASE_DESCRIPTION =
  "Découvrez l’ensemble des biens à louer proposés par Be Home Partners dans le Brabant wallon et ses environs.";

type SearchParams = Promise<{ page?: string | string[] }>;

function resolvePage(parsed: ReturnType<typeof parsePageParam>): number {
  return parsed.kind === "ok" ? parsed.page : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { page: pageRaw } = await searchParams;
  const parsed = parsePageParam(pageRaw);
  const view = defaultListingsView("location", null);
  const { pageCount } = paginateListings(view, 1);
  const requested = resolvePage(parsed);
  const safePage = Math.min(Math.max(requested, 1), pageCount);
  const url = pageUrl(URL_PATH, safePage);
  const title =
    safePage > 1 ? `${BASE_TITLE} – Page ${safePage}` : BASE_TITLE;
  return {
    title,
    description: BASE_DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${url}` },
    openGraph: {
      title,
      description: BASE_DESCRIPTION,
      url: `${SITE_URL}${url}`,
      type: "website",
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page: pageRaw } = await searchParams;
  const parsed = parsePageParam(pageRaw);

  if (parsed.kind === "explicit-one" || parsed.kind === "invalid") {
    permanentRedirect(URL_PATH);
  }

  const view = defaultListingsView("location", null);
  const { pageCount } = paginateListings(view, 1);
  const page = resolvePage(parsed);

  if (page > pageCount) {
    permanentRedirect(URL_PATH);
  }

  const { items } = paginateListings(view, page);
  const url = pageUrl(URL_PATH, page);
  const isFirstPage = page === 1;
  const listName = isFirstPage
    ? "Biens à louer"
    : `Biens à louer – Page ${page}`;

  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "À louer" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaJsonLd(
          breadcrumbSchema([
            { label: "Accueil", url: "/" },
            { label: "À louer", url: URL_PATH },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaJsonLd(
          listingItemListSchema({
            name: listName,
            url,
            mode: "location",
            items,
          }),
        )}
      />
      <ListingsPage
        mode="location"
        fixedType={null}
        h1="Nos biens à louer"
        subtitle="Découvrez l’ensemble des biens actuellement proposés à la location dans le Brabant wallon et ses environs."
        breadcrumb={breadcrumb}
        basePath={URL_PATH}
        initialPage={page}
        showSeoText={isFirstPage}
      />
    </>
  );
}
