"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Zap, Target, TrendingUp, ShoppingBag, Truck, X } from "lucide-react";
import { Badge } from "./ui/badge";

export function SolutionsMegamenu({ dictionary }: { dictionary: any }) {
  const solutionsDict = dictionary.megamenu.solutions;

  // Icon mapping for solutions (example mapping based on typical ecommerce solutions)
  const icons = [Globe, Zap, Target, TrendingUp, ShoppingBag, Truck];

  return (
    <div className="relative bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_40px_-10px_rgba(211,254,62,0.15)] ring-1 ring-black/[0.03]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50 bg-gray-50/50">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-volcana-lime/50 bg-volcana-lime/10 text-black text-[10px] font-bold tracking-widest uppercase py-0.5">
            SOLUÇÕES
          </Badge>
          <span className="text-xs text-gray-400 font-medium">Verticalize sua operação com inteligência</span>
        </div>
        <div className="text-[10px] font-bold text-gray-300 tracking-widest uppercase flex items-center gap-2">
          Mova o mouse para fechar
          <div className="w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center">
            <X className="w-2 h-2 text-gray-300" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Title & Subtitle */}
        <div className="lg:col-span-4 p-10 border-r border-gray-50 flex flex-col justify-between bg-gray-50/20">
          <div>
            <h3 className="text-4xl font-black text-black leading-tight tracking-tighter mb-6 uppercase">
              {solutionsDict.title}
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Encontre o caminho ideal para sua escala. Nossos agentes se adaptam à maturidade do seu negócio digital.
            </p>
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-black text-white">
            <p className="text-xs font-bold text-volcana-lime tracking-widest uppercase mb-2">Suporte Expert</p>
            <p className="text-sm font-medium text-gray-400 mb-4">Dúvidas sobre qual solução escolher?</p>
            <Link href="/waitlist" className="inline-flex items-center text-sm font-bold hover:text-volcana-lime transition-colors gap-2">
              Falar com consultor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Middle Column: Links Grid */}
        <div className="lg:col-span-5 p-10 border-r border-gray-50">
          <div className="grid grid-cols-1 gap-1">
            {solutionsDict.links.map((link: string, index: number) => {
              const Icon = icons[index % icons.length];
              return (
                <Link
                  key={link}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-volcana-lime/20 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-lg font-bold text-gray-800 group-hover:text-black transition-colors">
                      {link}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-volcana-lime transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column: Featured Case */}
        <div className="lg:col-span-3 p-10 flex flex-col justify-center bg-gray-50/10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            DESTAQUE
          </h4>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop"
              alt={solutionsDict.success_story.image_alt}
              width={400}
              height={500}
              className="object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <Badge variant="volcana" className="mb-3 text-[10px] font-black uppercase tracking-widest py-0">CASE STUDY</Badge>
              <p className="text-white font-bold text-lg leading-tight mb-4 group-hover:text-volcana-lime transition-colors">
                {solutionsDict.success_story.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-300 group-hover:text-white transition-colors">
                LER HISTÓRIA COMPLETA
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}