import { listings, type Listing, type ListingType } from "@/data/listings";
import { applySort } from "./filters";
import { isTypeAllowedForMode, type TransactionMode } from "./typeSlug";

export const LISTINGS_PAGE_SIZE = 12;

export function pageUrl(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export type ParsedPageParam =
  | { kind: "default" }
  | { kind: "ok"; page: number }
  | { kind: "explicit-one" }
  | { kind: "invalid" };

export function parsePageParam(
  raw: string | string[] | undefined,
): ParsedPageParam {
  if (raw === undefined) return { kind: "default" };
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value === undefined || value === "") return { kind: "default" };
  if (!/^\d+$/.test(value)) return { kind: "invalid" };
  const n = parseInt(value, 10);
  if (n < 1) return { kind: "invalid" };
  if (n === 1) return { kind: "explicit-one" };
  return { kind: "ok", page: n };
}

export function defaultListingsView(
  mode: TransactionMode,
  fixedType: ListingType | null,
): Listing[] {
  const byMode = listings.filter(
    (l) =>
      isTypeAllowedForMode(l.type, mode) &&
      (mode === "vente" ? l.salePrice > 0 : l.monthlyRent > 0),
  );
  const byType = fixedType
    ? byMode.filter((l) => l.type === fixedType)
    : byMode;
  return applySort(byType, "recent", mode);
}

export function paginateListings(
  list: Listing[],
  page: number,
  pageSize: number = LISTINGS_PAGE_SIZE,
): { items: Listing[]; pageCount: number } {
  const total = list.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), pageCount);
  return {
    items: list.slice((safePage - 1) * pageSize, safePage * pageSize),
    pageCount,
  };
}
