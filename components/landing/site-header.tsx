import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-divider bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/teikio-logo.svg"
            alt="Teikio Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Teikio</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <ThemeToggle />
          {children}
        </div>
      </div>
    </nav>
  );
}
