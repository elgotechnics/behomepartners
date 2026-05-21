"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bhp:favorites";
const EVENT = "bhp:favorites-changed";

export type FavoriteMode = "vente" | "location";
export type Favorite = { id: string; mode: FavoriteMode };

function isFavorite(v: unknown): v is Favorite {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    (o.mode === "vente" || o.mode === "location")
  );
}

function readAll(): Favorite[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const migrated: Favorite[] = [];
    for (const item of parsed) {
      if (typeof item === "string") {
        migrated.push({ id: item, mode: "vente" });
      } else if (isFavorite(item)) {
        migrated.push(item);
      }
    }
    return migrated;
  } catch {
    return [];
  }
}

function writeAll(list: Favorite[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* quota or private mode — ignore */
  }
}

function hasFav(list: Favorite[], id: string, mode: FavoriteMode): boolean {
  return list.some((f) => f.id === id && f.mode === mode);
}

export function useFavorite(id: string, mode: FavoriteMode) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(hasFav(readAll(), id, mode));
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [id, mode]);

  const toggle = useCallback(() => {
    const list = readAll();
    const next = hasFav(list, id, mode)
      ? list.filter((f) => !(f.id === id && f.mode === mode))
      : [...list, { id, mode }];
    writeAll(next);
    setActive(hasFav(next, id, mode));
  }, [id, mode]);

  return { active, toggle };
}

export function useFavorites() {
  const [items, setItems] = useState<Favorite[]>([]);

  useEffect(() => {
    const sync = () => setItems(readAll());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return items;
}
