import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Locale } from "@/lib/i18n-config";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Volcana™ - O E-commerce que se opera sozinho",
  description: "O E-commerce que se opera sozinho chegou à América Latina.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Volcana™",
  "applicationCategory": "EcommercePlatform",
  "operatingSystem": "Web",
  "description": "A primeira plataforma de e-commerce AI-Native da América Latina. Engenharia brasileira. Custo fixo. Operação agêntica.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1284"
  },
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "BRL"
  }
};

export default function LangRootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={lang} className={outfit.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}