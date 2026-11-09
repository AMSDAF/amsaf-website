"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import type { LinkContent } from "@/types/content";

export function HeaderDisclosure({
  children,
  links,
  action,
}: {
  children: ReactNode;
  links: readonly LinkContent[];
  action?: LinkContent;
}) {
  const panelId = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="site-container grid grid-cols-[1fr_auto] grid-rows-[calc(4rem-1px)_auto] items-center lg:grid-cols-[auto_1fr] lg:grid-rows-[calc(4.5rem-1px)] lg:gap-6"
      onKeyDown={(event) => {
        if (
          event.key === "Escape" &&
          expanded &&
          trigger.current?.offsetWidth
        ) {
          setExpanded(false);
          trigger.current.focus();
        }
      }}
    >
      <div>{children}</div>
      <button
        ref={trigger}
        type="button"
        aria-label="Menu"
        aria-expanded={expanded}
        aria-controls={panelId}
        className="grid size-11 cursor-pointer place-items-center rounded-control border border-border-strong hover:bg-surface-muted active:bg-surface-muted aria-expanded:bg-surface-muted lg:hidden"
        onClick={() => setExpanded(!expanded)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d={expanded ? "m6 6 12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={`col-span-2 mb-3 rounded-card border border-border bg-surface p-2 lg:col-span-1 lg:mb-0 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 ${expanded ? "block" : "hidden"}`}
      >
        <nav aria-label="Navegação principal">
          <ul className="text-nav text-content-muted lg:flex lg:justify-center lg:gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className="flex min-h-12 min-w-11 items-center rounded-control px-3 underline-offset-4 hover:text-content hover:underline active:text-content lg:min-h-11 lg:whitespace-nowrap lg:px-0"
                  href={href}
                  onClick={() => setExpanded(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {action && (
          <Link
            className="action-target mt-2 min-h-12 w-full justify-center gap-2 bg-accent px-[18px] text-on-accent hover:bg-accent-hover active:bg-accent-active lg:mt-0 lg:min-h-11 lg:w-auto lg:px-4"
            href={action.href}
            onClick={() => setExpanded(false)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              className="size-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.5-4A8.5 8.5 0 1 1 21 11.5Z" />
            </svg>
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
