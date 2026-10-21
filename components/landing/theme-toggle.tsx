"use client";

import { useSyncExternalStore } from "react";
import { Moon, NotebookPen, Sun, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Theme = "light" | "paper" | "dark";

const options: { value: Theme; label: string; Icon: LucideIcon }[] = [
  { value: "light", label: "Claro", Icon: Sun },
  { value: "paper", label: "Papel", Icon: NotebookPen },
  { value: "dark", label: "Oscuro", Icon: Moon },
];

/** Key the script in app/layout.tsx reads before the first paint. */
export const THEME_STORAGE_KEY = "theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getTheme = () => document.documentElement.dataset.theme ?? null;

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage blocked: the choice lasts until the page is closed.
  }
}

/** Same shape as the app's ButtonGroup: a track with the active option on a raised pill. */
export function ThemeToggle() {
  const current = useSyncExternalStore(subscribe, getTheme, () => null);

  return (
    <div
      role="radiogroup"
      aria-label="Tema"
      className="flex rounded-3xl bg-surface-high p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = current === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-8 items-center justify-center rounded-3xl transition-colors",
              active
                ? "bg-surface-bright text-foreground shadow-sm"
                : "text-on-surface-variant hover:text-foreground",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} />
          </button>
        );
      })}
    </div>
  );
}
