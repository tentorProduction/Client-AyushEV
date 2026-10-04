"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/* Dismissed by dragging the handle, tapping outside or pressing Escape. */
export function Sheet({ open, onClose, title, children }: SheetProps) {
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startY: 0, startTime: 0, y: 0 });
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    setDragY(0);
    setDragging(false);

    const previousFocus = document.activeElement as HTMLElement | null;
    const focusable = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]',
    ) ?? []);
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { startY: event.clientY, startTime: Date.now(), y: 0 };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const y = Math.max(0, event.clientY - drag.current.startY);
    drag.current.y = y;
    setDragY(y);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    setDragging(false);

    const { y, startTime } = drag.current;
    const velocity = y / Math.max(1, Date.now() - startTime);

    if (y > 120 || velocity > 0.5) {
      onClose();
    } else {
      setDragY(0);
    }
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="sheet-backdrop absolute inset-0 cursor-pointer bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="sheet-panel absolute inset-x-0 bottom-0 mx-auto max-w-2xl rounded-t-[28px] bg-surface pb-safe shadow-float"
        style={{
          transform: `translateY(${dragY}px)`,
          transition: dragging
            ? "none"
            : "transform 340ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="cursor-grab touch-none select-none px-6 pt-3 pb-2"
        >
          <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-ink-faint" />
          <div className="flex items-center justify-between gap-4">
            <h2 id={titleId} className="display text-[26px] text-ink">{title}</h2>
            <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-panel text-2xl focus-visible:outline-2 focus-visible:outline-ink">×</button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto overscroll-contain px-6 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
