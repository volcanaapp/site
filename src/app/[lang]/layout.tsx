import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
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
  verification: {
    google: "KlAtdVG4nC3eSqW4FuqpeMUm_Jm1wXbiovSwdhVsbwY",
  },
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

export default async function LangRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={outfit.variable}>
      <head>
        {/* Metadados e links são gerenciados pelo Next.js */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVFQJZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager Script via Next.js Script Component */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZVFQJZ4');
          `}
        </Script>

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