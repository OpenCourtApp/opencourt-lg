import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenCourt — As quadras da sua escola, sob controle",
  description:
    "Reservas, calendário e ocupação das quadras da sua escola em um só lugar. Sem planilha, sem papel, sem conflito de horário. Grátis para começar.",
  metadataBase: new URL("https://opencourt.app"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "OpenCourt — As quadras da sua escola, sob controle",
    description:
      "Reservas, calendário e ocupação das quadras da sua escola em um só lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
