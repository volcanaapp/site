import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Locale } from "@/lib/i18n-config";
import { AppWrapper } from "@/components/app-wrapper";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Volcana™",
  description: "A primeira plataforma de e-commerce autônoma da América Latina.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <AppWrapper>
          {children}
          <Toaster richColors theme="dark" />
        </AppWrapper>
      </body>
    </html>
  );
}