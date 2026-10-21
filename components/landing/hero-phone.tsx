import {
  ChartColumn,
  Check,
  ClipboardList,
  House,
  LayoutGrid,
  Plus,
  Search,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Table = { name: string; orders?: number };

const zones: { name: string; tables: Table[] }[] = [
  {
    name: "Salón",
    tables: [
      { name: "Mesa 1", orders: 2 },
      { name: "Mesa 2" },
      { name: "Mesa 3", orders: 1 },
      { name: "Mesa 4" },
    ],
  },
  {
    name: "Terraza",
    tables: [{ name: "Mesa 5" }, { name: "Mesa 6", orders: 3 }],
  },
];

const tabs = [
  { label: "Inicio", Icon: House },
  { label: "Mesas", Icon: LayoutGrid, active: true },
  { label: "Pedidos", Icon: ClipboardList },
  { label: "Panel", Icon: ChartColumn },
  { label: "Perfil", Icon: User },
];

/**
 * The app's Mesas screen drawn with the site's color roles, so it follows
 * the visitor's light/dark theme. Swap for a real screenshot when there is one.
 */
export function HeroPhone() {
  return (
    <div
      role="img"
      aria-label="Pantalla de mesas de la app Teikio, con mesas por zona y su estado"
      className="mx-auto w-[270px] rounded-[44px] border border-border bg-surface p-2.5 sm:w-[300px]"
    >
      <div
        aria-hidden
        className="flex h-[540px] flex-col overflow-hidden rounded-[36px] bg-background sm:h-[600px]"
      >
        <div className="flex h-8 items-center justify-center">
          <span className="h-[22px] w-[90px] rounded-full bg-foreground/90" />
        </div>
        <div className="flex items-center justify-between px-4 pt-2 pb-1">
          <span className="text-2xl font-semibold">Mesas</span>
          <Search className="size-5 text-icon" strokeWidth={1.75} />
        </div>
        <div className="flex gap-1 px-4 py-2.5 text-[11px] sm:gap-1.5">
          <span className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 sm:px-2.5 text-on-secondary">
            <Check className="size-3" strokeWidth={2} />
            Todas
          </span>
          <span className="rounded-md border border-primary px-2 py-1 sm:px-2.5 text-primary">
            Disponibles
          </span>
          <span className="rounded-md border border-primary px-2 py-1 sm:px-2.5 text-primary">
            Ocupadas
          </span>
        </div>
        {zones.map((zone) => (
          <div key={zone.name}>
            <p className="px-4 pt-1.5 pb-1 text-[11px] text-muted-text">
              {zone.name}
            </p>
            <div className="grid grid-cols-2 gap-2 px-4 py-1">
              {zone.tables.map((table) => (
                <div
                  key={table.name}
                  className={cn(
                    "flex min-h-[74px] flex-col justify-between rounded-md bg-surface-container-low p-3",
                    !table.orders && "shadow-[0_2px_10px_rgba(0,0,0,0.06)]",
                  )}
                >
                  <span className="text-sm font-semibold">{table.name}</span>
                  {table.orders ? (
                    <span className="self-start rounded-full bg-primary-container px-2 py-0.5 text-[10px] font-bold text-on-primary-container">
                      {table.orders} {table.orders === 1 ? "pedido" : "pedidos"}
                    </span>
                  ) : (
                    <span className="self-start rounded-full bg-success-container px-2 py-0.5 text-[10px] font-bold text-on-success-container">
                      Disponible
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-auto flex justify-end px-4 pb-3">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg">
            <Plus className="size-5" strokeWidth={1.75} />
          </span>
        </div>
        <div className="flex justify-around border-t border-divider bg-surface-bright pt-2.5 pb-3.5">
          {tabs.map(({ label, Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-0.5 text-[9px]",
                active ? "text-foreground" : "text-icon",
              )}
            >
              <span
                className={cn(
                  "flex h-6 items-center justify-center rounded-full px-2.5",
                  active && "bg-secondary text-on-secondary",
                )}
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
