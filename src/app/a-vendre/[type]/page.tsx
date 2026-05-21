import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ListingsPage } from "@/components/listings/ListingsPage";
import {
  descriptionFor,
  getTypePage,
  isValidSlug,
  saleSlugs,
} from "@/components/listings/typeSlug";
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

type RouteParams = { type: string };
type SearchParams = Promise<{ page?: string | string[] }>;

export function generateStaticParams(): RouteParams[] {
  return saleSlugs().map((slug) => ({ type: slug }));
}

function resolvePage(parsed: ReturnType<typeof parsePageParam>): number {
  return parsed.kind === "ok" ? parsed.page : 1;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { type } = await params;
  if (!isValidSlug(type, "vente")) return {};
  const meta = getTypePage(type);
  if (!meta) return {};

  const { page: pageRaw } = await searchParams;
  const parsed = parsePageParam(pageRaw);
  const basePath = `/a-vendre/${meta.slug}`;
  const view = defaultListingsView("vente", meta.type);
  const { pageCount } = paginateListings(view, 1);
  const requested = resolvePage(parsed);
  const safePage = Math.min(Math.max(requested, 1), pageCount);
  const url = pageUrl(basePath, safePage);
  const description = descriptionFor(meta, "vente");
  const title =
    safePage > 1 ? `${meta.titleSale} – Page ${safePage}` : meta.titleSale;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${url}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${url}`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams: SearchParams;
}) {
  const { type } = await params;
  if (!isValidSlug(type, "vente")) notFound();
  const meta = getTypePage(type)!;
  const basePath = `/a-vendre/${meta.slug}`;

  const { page: pageRaw } = await searchParams;
  const parsed = parsePageParam(pageRaw);

  if (parsed.kind === "explicit-one" || parsed.kind === "invalid") {
    permanentRedirect(basePath);
  }

  const view = defaultListingsView("vente", meta.type);
  const { pageCount } = paginateListings(view, 1);
  const page = resolvePage(parsed);

  if (page > pageCount) {
    permanentRedirect(basePath);
  }

  const { items } = paginateListings(view, page);
  const url = pageUrl(basePath, page);
  const isFirstPage = page === 1;
  const listName = isFirstPage
    ? meta.h1Sale
    : `${meta.h1Sale} – Page ${page}`;

  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "À vendre", href: "/a-vendre" },
    { label: meta.pluralLabel },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaJsonLd(
          breadcrumbSchema([
            { label: "Accueil", url: "/" },
            { label: "À vendre", url: "/a-vendre" },
            { label: meta.pluralLabel, url: basePath },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaJsonLd(
          listingItemListSchema({
            name: listName,
            url,
            mode: "vente",
            items,
          }),
        )}
      />
      <ListingsPage
        mode="vente"
        fixedType={meta.type}
        h1={meta.h1Sale}
        subtitle={descriptionFor(meta, "vente")}
        breadcrumb={breadcrumb}
        basePath={basePath}
        initialPage={page}
        showSeoText={isFirstPage}
      />
    </>
  );
}
