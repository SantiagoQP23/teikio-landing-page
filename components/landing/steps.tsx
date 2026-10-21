import { ChartColumn, Printer, Smartphone } from "lucide-react";

const steps = [
  {
    Icon: Smartphone,
    title: "El mesero toma el pedido",
    text: "Platos, cantidades y notas como “sin cebolla”, con unos toques en su celular.",
  },
  {
    Icon: Printer,
    title: "La cocina lo recibe al instante",
    text: "Cada área de producción recibe su comanda, clara y con la mesa indicada.",
  },
  {
    Icon: ChartColumn,
    title: "Tú ves todo, estés donde estés",
    text: "Mesas ocupadas, pedidos activos, cuentas y ventas del día en tiempo real.",
  },
];

export function Steps() {
  return (
    <section id="como-funciona" className="px-6 py-14 sm:py-22">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-[0.5px] text-muted-text uppercase">
          Cómo funciona
        </p>
        <h2 className="mt-2 text-[26px] leading-tight font-semibold sm:text-[34px]">
          Del mesero a la cocina, sin papelitos
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, index) => (
            <li key={title} className="rounded-md bg-surface-container-low p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-11 items-center justify-center rounded-md bg-secondary text-on-secondary">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-muted-text">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-[15px] font-normal text-on-surface-variant">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
