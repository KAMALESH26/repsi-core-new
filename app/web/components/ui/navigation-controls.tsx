"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationControlsProps {
  homeHref?: string;
  className?: string;
}

export function NavigationControls({ homeHref = "/", className }: NavigationControlsProps) {
  const router = useRouter();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={() => router.back()}
        title="Back"
        aria-label="Go back"
        className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => router.forward()}
        title="Forward"
        aria-label="Go forward"
        className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] cursor-pointer"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => router.push(homeHref)}
        title="Home"
        aria-label="Go to home"
        className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] cursor-pointer"
      >
        <Home className="h-4 w-4" />
      </button>
    </div>
  );
}
