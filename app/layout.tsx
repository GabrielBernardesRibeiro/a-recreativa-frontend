import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio A Recreativa - Gabriel Bernardes Ribeiro",
  description:
    "Projeto desenvolvido como parte do processo seletivo para a empresa A Recreativa. Criado por Gabriel Bernardes Ribeiro.",
  openGraph: {
    title: "Desafio A Recreativa - Gabriel Bernardes Ribeiro",
    description:
      "Projeto desenvolvido como parte do processo seletivo para A Recreativa.",
    url: "https://bernardes.dev.br",
    siteName: "Gabriel Bernardes Ribeiro",
    type: "website",
  },
};

export const links = {
  linkedin: "https://www.linkedin.com/in/gabrielbernardesr",
  github: "https://github.com/GabrielBernardesRibeiro",
  personalWebsite: "https://bernardes.dev.br",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
