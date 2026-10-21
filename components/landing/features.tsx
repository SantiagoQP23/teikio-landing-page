import { MapIcon, Package, Receipt, Store, Users, WifiOff } from "lucide-react";

const features = [
  {
    Icon: MapIcon,
    title: "Mesas y zonas",
    text: "Salón, terraza o barra, con el estado de cada mesa.",
  },
  {
    Icon: Receipt,
    title: "Cuentas y pagos",
    text: "Divide la cuenta y cobra con varios métodos de pago.",
  },
  {
    Icon: Package,
    title: "Inventario",
    text: "Recetas, compras y alertas cuando algo se acaba.",
  },
  {
    Icon: WifiOff,
    title: "Sin internet",
    text: "Sigue tomando pedidos; se sincroniza al volver la señal.",
  },
  {
    Icon: Users,
    title: "Tu equipo, con roles",
    text: "Meseros, cocina, caja y administradores ven lo suyo.",
  },
  {
    Icon: Store,
    title: "Varias sucursales",
    text: "Crea una sucursal copiando el menú en un minuto.",
  },
];

export function Features() {
  return (
    <section className="px-6 pb-14 sm:pb-22">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-[0.5px] text-muted-text uppercase">
          Todo en una app
        </p>
        <h2 className="mt-2 text-[26px] leading-tight font-semibold sm:text-[34px]">
          Lo que necesita tu restaurante, nada más
        </h2>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-3.5 bg-background p-6">
              <Icon
                className="mt-0.5 size-5 shrink-0 text-icon"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-0.5 text-sm font-normal text-on-surface-variant">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
