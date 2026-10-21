import { Button } from "@/components/ui/button";
import { ClosingCta } from "@/components/landing/closing-cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { appLink } from "@/components/landing/links";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Steps } from "@/components/landing/steps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader>
        <a
          href="#como-funciona"
          className="hidden text-sm text-on-surface-variant hover:text-foreground sm:inline"
        >
          Cómo funciona
        </a>
        <a
          href="#contacto"
          className="hidden text-sm text-on-surface-variant hover:text-foreground sm:inline"
        >
          Contacto
        </a>
        <Button asChild size="sm">
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            Ir a la app
          </a>
        </Button>
      </SiteHeader>
      <main>
        <Hero />
        <Steps />
        <Features />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
