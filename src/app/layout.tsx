import type { Metadata } from "next";
import { Providers } from "./provider";
import "./globals.css";
import ThemeSwitch from "./components/ThemSwitch";

export const metadata: Metadata = {
  title: "Ziel",
  description: "Alcanza tus objetivos, nosotros te guiamos en el camino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-co" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-slate-800">
        <Providers>
          <nav>
            <ThemeSwitch />
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
