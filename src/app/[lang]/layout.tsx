import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import { PageWrapper } from "@/components/page-wrapper";

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
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <PageWrapper>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header dictionary={dictionary} />
            <main className="flex-1">{children}</main>
            <Footer dictionary={dictionary.footer} />
          </div>
        </PageWrapper>
      </body>
    </html>
  );
}