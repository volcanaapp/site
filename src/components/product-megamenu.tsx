"use client";

import Link from "next/link";
import Image from "next/image";

export function ProductMegamenu({ dictionary }: { dictionary: any }) {
  const productDict = dictionary.megamenu.product;

  return (
    <div className="container max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
        {/* Main Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {productDict.cards.map((card: any, index: number) => (
            <Link href="#" key={index} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={card.image_url}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </Link>
          ))}
        </div>

        {/* Integrations Column */}
        <div className="lg:col-span-1">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
            {productDict.integrations.title}
          </h4>
          <div className="space-y-6">
            {productDict.integrations.items.map((item: any, index: number) => (
              <Link href="#" key={index} className="flex items-start gap-4 group">
                <div className="relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}