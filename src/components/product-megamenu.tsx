"use client";

import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

export function ProductMegamenu({ dictionary }: { dictionary: any }) {
  const productDict = dictionary.megamenu.product;

  return (
    <div className="relative bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] w-full">
      {/* Header of Megamenu */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50 bg-gray-50/50">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-volcana-lime/50 bg-volcana-lime/10 text-black text-[10px] font-bold tracking-widest uppercase py-0.5">
            PLATAFORMA
          </Badge>
          <span className="text-xs text-gray-400 font-medium">Explore as possibilidades da Volcana™</span>
        </div>
        <div className="text-[10px] font-bold text-gray-300 tracking-widest uppercase flex items-center gap-2">
          Mova o mouse para fechar
          <div className="w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center">
            <X className="w-2 h-2" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Main Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 p-10 border-r border-gray-50">
          {productDict.cards.map((card: any, index: number) => (
            <Link href="#" key={index} className="group block">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={card.image_url}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-volcana-lime p-2 rounded-lg shadow-lg">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
              <h3 className="font-black text-xl text-black mb-2 group-hover:text-volcana-lime transition-colors flex items-center gap-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-2">{card.description}</p>
            </Link>
          ))}
        </div>

        {/* Integrations Column */}
        <div className="lg:col-span-1 bg-gray-50/30 p-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-volcana-lime" />
            {productDict.integrations.title}
          </h4>
          <div className="space-y-8">
            {productDict.integrations.items.map((item: any, index: number) => (
              <Link href="#" key={index} className="flex flex-col gap-4 group">
                <div className="relative h-24 w-full flex-shrink-0 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm group-hover:border-volcana-lime/30 group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={100}
                    height={50}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-black transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Quick Action */}
      <div className="p-4 bg-black text-center group cursor-pointer overflow-hidden relative">
        <Link href={`/waitlist`} className="inline-flex items-center gap-2 text-volcana-lime font-bold text-xs tracking-widest uppercase relative z-10">
          Comece agora sua jornada agentica
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </Link>
        <div className="absolute inset-0 bg-volcana-lime/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>
    </div>
  );
}