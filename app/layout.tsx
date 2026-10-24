import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Sets data-theme before the first paint: the visitor's saved choice
// (see ThemeToggle), otherwise their system setting, which it keeps following.
const themeScript = `(function(){var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)");function s(){try{return localStorage.getItem("theme")}catch(e){return null}}function a(){var t=s();d.dataset.theme=t==="light"||t==="paper"||t==="dark"?t:m.matches?"dark":"light"}a();m.addEventListener("change",function(){if(!s())a()})})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141311" },
  ],
};

export const metadata: Metadata = {
  title: "Teikio - Pedidos claros, cocina organizada",
  description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  metadataBase: new URL("https://teikio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://teikio.com",
    siteName: "Teikio",
    title: "Teikio - Pedidos claros, cocina organizada",
    description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teikio - Pedidos claros, cocina organizada",
    description: "Termina con los errores en los pedidos, la confusión en cocina y el estrés de las horas pico. Lleva tu restaurante con orden y tranquilidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
