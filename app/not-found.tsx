import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página no encontrada | Teikio",
  description: "La página que buscas no existe o fue movida a otra dirección.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg mx-auto">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <svg
            width="280"
            height="200"
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[280px] h-auto"
            aria-hidden
          >
            {/* Plate */}
            <ellipse
              cx="140"
              cy="130"
              rx="100"
              ry="30"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="2"
            />
            <ellipse
              cx="140"
              cy="128"
              rx="70"
              ry="20"
              fill="var(--background)"
              stroke="var(--border)"
              strokeWidth="2"
            />

            {/* Fork */}
            <rect x="85" y="40" width="6" height="80" rx="3" fill="var(--icon)" opacity="0.5" />
            <rect x="80" y="30" width="4" height="25" rx="2" fill="var(--icon)" opacity="0.5" />
            <rect x="87" y="30" width="4" height="25" rx="2" fill="var(--icon)" opacity="0.5" />
            <rect x="94" y="30" width="4" height="25" rx="2" fill="var(--icon)" opacity="0.5" />

            {/* Knife */}
            <rect x="189" y="40" width="6" height="80" rx="3" fill="var(--icon)" opacity="0.5" />
            <path
              d="M186 40 L198 40 L198 25 C198 18 192 15 186 20 Z"
              fill="var(--icon)"
              opacity="0.5"
            />

            {/* 404 floating above plate */}
            <text
              x="140"
              y="115"
              textAnchor="middle"
              fontSize="48"
              fontWeight="600"
              fill="var(--primary)"
              fontFamily="var(--font-jakarta), sans-serif"
            >
              404
            </text>
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <Image
            src="/teikio-logo.svg"
            alt="Teikio Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Teikio</span>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-semibold mb-3">Página no encontrada</h1>
        <p className="text-lg font-normal text-on-surface-variant mb-8">
          La página que buscas no existe o fue movida a otra dirección.
        </p>

        {/* Button */}
        <Button asChild size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
