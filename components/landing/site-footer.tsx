import Link from "next/link";
import { whatsappLink } from "./links";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 border-t border-divider pt-6 text-sm text-muted-text sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Teikio</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-foreground">
            Política de privacidad
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
