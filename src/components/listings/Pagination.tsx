"use client";

import Link from "next/link";
import { pageUrl } from "./paginate";

export function Pagination({
  page,
  pageCount,
  basePath,
  onNavigate,
}: {
  page: number;
  pageCount: number;
  basePath: string;
  onNavigate?: (p: number) => void;
}) {
  if (pageCount <= 1) return null;

  const pages = buildPageList(page, pageCount);

  return (
    <nav
      aria-label="Pagination des résultats"
      className="mt-10 lg:mt-14 flex items-center justify-center gap-2"
    >
      <NavLink
        direction="prev"
        disabled={page <= 1}
        href={pageUrl(basePath, Math.max(1, page - 1))}
        onNavigate={() => onNavigate?.(page - 1)}
      />

      <ol className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <li
              key={`e-${i}`}
              className="px-2 text-ink/40 text-[14px] select-none"
              aria-hidden
            >
              …
            </li>
          ) : (
            <li key={p}>
              <Link
                href={pageUrl(basePath, p)}
                scroll={false}
                onClick={() => onNavigate?.(p)}
                aria-current={p === page ? "page" : undefined}
                aria-label={`Page ${p}`}
                className={`inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full text-[13px] font-semibold tabular-nums transition-all ${
                  p === page
                    ? "bg-accent text-white shadow-[0_6px_18px_-6px_rgba(154,30,52,0.4)]"
                    : "text-ink hover:bg-ink/[0.06]"
                }`}
              >
                {p}
              </Link>
            </li>
          ),
        )}
      </ol>

      <NavLink
        direction="next"
        disabled={page >= pageCount}
        href={pageUrl(basePath, Math.min(pageCount, page + 1))}
        onNavigate={() => onNavigate?.(page + 1)}
      />
    </nav>
  );
}

function NavLink({
  direction,
  disabled,
  href,
  onNavigate,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  href: string;
  onNavigate?: () => void;
}) {
  const baseClass =
    "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-hairline text-ink transition-all";
  const ariaLabel = direction === "prev" ? "Page précédente" : "Page suivante";
  const arrow = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={direction === "next" ? "rotate-180" : ""}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  if (disabled) {
    return (
      <span
        aria-label={ariaLabel}
        aria-disabled="true"
        className={`${baseClass} opacity-30 cursor-not-allowed`}
      >
        {arrow}
      </span>
    );
  }
  return (
    <Link
      href={href}
      scroll={false}
      aria-label={ariaLabel}
      onClick={onNavigate}
      className={`${baseClass} hover:ring-ink/30`}
    >
      {arrow}
    </Link>
  );
}

function buildPageList(
  current: number,
  total: number,
): Array<number | "ellipsis"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const out: Array<number | "ellipsis"> = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) out.push("ellipsis");
  for (let i = left; i <= right; i++) out.push(i);
  if (right < total - 1) out.push("ellipsis");

  out.push(total);
  return out;
}
