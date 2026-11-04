// Auth layout — centered, clean, no sidebar
// Shared by login, signup, forgot-password, etc.

import Link from "next/link";
import Image from "next/image";
import { NavigationControls } from "@/components/ui/navigation-controls";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] flex flex-col justify-between selection:bg-[var(--primary)]/20 selection:text-[var(--primary-dark)]">
      {/* Top Header - Logo on left, Nav & Theme controls on right */}
      <header className="p-4 sm:p-6 flex items-center justify-between shrink-0 border-b border-[var(--border)] bg-[var(--surface)]">
        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
          <Image
            src="/logos/logo-dark.png"
            alt="REPSI"
            width={120}
            height={40}
            className="h-6 sm:h-7 w-auto object-contain dark:invert"
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          <NavigationControls homeHref="/" />
          <div className="w-px h-5 bg-[var(--border)] mx-1" />
          <ThemeToggle />
        </div>
      </header>

      {/* Center - Uses my-auto so it stays centered when there is space, but never clips at the top when vertical space is constrained */}
      <main className="flex-1 flex flex-col items-center px-4 py-4 sm:py-6">
        <div className="w-full flex flex-col items-center my-auto">
          {children}
        </div>
      </main>

      {/* Footer - Tiny at bottom */}
      <footer className="py-6 text-center text-xs text-[#8A9690] shrink-0">
        <p>
          © {new Date().getFullYear()} REPSI Technologies ·{" "}
          <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-[var(--text)] transition-colors">
            Terms
          </Link>
        </p>
      </footer>
    </div>
  );
}
