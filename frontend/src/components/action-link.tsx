import Link from "next/link";
import type { LinkContent } from "@/types/content";

const variantStyles = {
  contact:
    "gap-2 bg-accent px-[18px] text-on-accent hover:bg-accent-hover active:bg-accent-active",
  primary:
    "border border-inverse bg-inverse px-4 text-on-inverse hover:border-inverse-hover hover:bg-inverse-hover active:border-inverse-active active:bg-inverse-active",
  secondary:
    "border border-border-strong px-4 text-content hover:bg-surface-muted active:border-content-muted active:bg-surface-muted",
};

export type ActionVariant = keyof typeof variantStyles;

export function ActionLink({
  href,
  label,
  variant = "primary",
}: LinkContent & { variant?: ActionVariant }) {
  return (
    <Link
      className={`action-target justify-center text-center transition-colors duration-150 ease-[ease] ${variantStyles[variant]}`}
      href={href}
    >
      {variant === "contact" && (
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
      )}
      {label}
    </Link>
  );
}
