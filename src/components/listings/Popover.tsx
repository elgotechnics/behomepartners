"use client";

import { useEffect, useRef } from "react";

export function Popover({
  open,
  onClose,
  anchorRef,
  children,
  width = 320,
  align = "start",
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  width?: number;
  align?: "start" | "end";
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (anchorRef.current?.contains(t)) return;
      onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      className={`absolute top-[calc(100%+8px)] z-30 rounded-[14px] bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] ring-1 ring-inset ring-hairline p-4 ${
        align === "end" ? "right-0" : "left-0"
      }`}
      style={{ width }}
    >
      {children}
    </div>
  );
}
