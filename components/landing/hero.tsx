import { Check } from "lucide-react";
import { CtaButtons } from "./cta-buttons";
import { HeroPhone } from "./hero-phone";

const highlights = [
  "Usa los celulares que ya tienes",
  "Se aprende en minutos",
  "Funciona sin internet",
];

export function Hero() {
  return (
    <header className="px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-[52px]">
            Pedidos claros.
            <br />
            Cocina organizada.
          </h1>
          <p className="mt-5 max-w-[30em] text-lg font-normal text-on-surface-variant sm:text-[19px]">
            Meseros, cocina y caja en una sola app, desde el celular. Hecha para
            restaurantes pequeños y medianos en Ecuador.
          </p>
          <CtaButtons className="mt-8 flex flex-wrap gap-3" />
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-on-surface-variant">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-4 text-foreground" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <HeroPhone />
      </div>
    </header>
  );
}
