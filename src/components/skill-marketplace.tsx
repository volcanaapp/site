import { Search, Zap, Box, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SkillMarketplaceProps {
  dictionary: {
    badge: string;
    title_part1: string;
    title_part2: string;
    subtitle: string;
    filters: {
      all: string;
      seo: string;
      conversion: string;
      supply: string;
    };
    cards: {
      card1: {
        category: string;
        title: string;
        description: string;
        price_label: string;
        cost_label: string;
        button: string;
      };
      card2: {
        category: string;
        title: string;
        description: string;
        price_label: string;
        cost_label: string;
        button: string;
      };
      card3: {
        category: string;
        title: string;
        description: string;
        price_label: string;
        cost_label: string;
        button: string;
      };
    };
  };
}

export function SkillMarketplace({ dictionary }: SkillMarketplaceProps) {
  return (
    <section className="bg-[#181817] text-[#ECEFE7] font-sans py-24 px-5">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#693EFE] border border-[#693EFE] bg-[rgba(105,62,254,0.1)] px-4 py-1.5 rounded-full text-xs font-bold tracking-[1.5px] mb-6">
            {dictionary.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {dictionary.title_part1}<br />
            <span className="text-volcana-lime">{dictionary.title_part2}</span>
          </h1>
          <p className="text-[#9EA09A] text-lg md:text-xl leading-relaxed">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          <button className="bg-transparent text-volcana-lime border border-volcana-lime px-5 py-2 rounded-full font-medium transition-all hover:bg-volcana-lime hover:text-[#181817]">
            {dictionary.filters.all}
          </button>
          <button className="bg-transparent text-[#9EA09A] border border-[#353634] px-5 py-2 rounded-full font-medium transition-all hover:border-volcana-lime hover:text-volcana-lime">
            {dictionary.filters.seo}
          </button>
          <button className="bg-transparent text-[#9EA09A] border border-[#353634] px-5 py-2 rounded-full font-medium transition-all hover:border-volcana-lime hover:text-volcana-lime">
            {dictionary.filters.conversion}
          </button>
          <button className="bg-transparent text-[#9EA09A] border border-[#353634] px-5 py-2 rounded-full font-medium transition-all hover:border-volcana-lime hover:text-volcana-lime">
            {dictionary.filters.supply}
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#20201F] border border-[#353634] rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 hover:border-volcana-lime group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded bg-[rgba(211,254,62,0.1)] text-volcana-lime">
                {dictionary.cards.card1.category}
              </span>
              <div className="text-volcana-lime opacity-80 group-hover:opacity-100 transition-opacity">
                <Search size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{dictionary.cards.card1.title}</h3>
            <p className="text-[#9EA09A] text-[15px] leading-relaxed mb-8 flex-grow">
              {dictionary.cards.card1.description}
            </p>
            <div className="border-t border-[#353634] pt-5 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-[#ECEFE7]">{dictionary.cards.card1.price_label}</span>
                <span className="text-xs text-[#9EA09A]">{dictionary.cards.card1.cost_label}</span>
              </div>
              <Button className="bg-[#353634] text-[#ECEFE7] hover:bg-volcana-lime hover:text-[#181817] font-semibold">
                {dictionary.cards.card1.button}
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#20201F] border border-[rgba(105,62,254,0.5)] rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:border-[#693EFE] hover:shadow-[0_10px_30px_rgba(105,62,254,0.1)] group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded bg-[rgba(105,62,254,0.1)] text-[#8A68FE]">
                {dictionary.cards.card2.category}
              </span>
              <div className="text-[#8A68FE] opacity-80 group-hover:opacity-100 transition-opacity">
                <Tag size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{dictionary.cards.card2.title}</h3>
            <p className="text-[#9EA09A] text-[15px] leading-relaxed mb-8 flex-grow">
              {dictionary.cards.card2.description}
            </p>
            <div className="border-t border-[#353634] pt-5 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-[#ECEFE7]">{dictionary.cards.card2.price_label}</span>
                <span className="text-xs text-[#9EA09A]">{dictionary.cards.card2.cost_label}</span>
              </div>
              <Button className="bg-[#353634] text-[#ECEFE7] hover:bg-volcana-lime hover:text-[#181817] font-semibold">
                {dictionary.cards.card2.button}
              </Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#20201F] border border-[#353634] rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 hover:border-volcana-lime group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded bg-[#353634] text-[#ECEFE7]">
                {dictionary.cards.card3.category}
              </span>
              <div className="text-[#ECEFE7] opacity-80 group-hover:opacity-100 transition-opacity">
                <Box size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{dictionary.cards.card3.title}</h3>
            <p className="text-[#9EA09A] text-[15px] leading-relaxed mb-8 flex-grow">
              {dictionary.cards.card3.description}
            </p>
            <div className="border-t border-[#353634] pt-5 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-[#ECEFE7]">{dictionary.cards.card3.price_label}</span>
                <span className="text-xs text-[#9EA09A]">{dictionary.cards.card3.cost_label}</span>
              </div>
              <Button className="bg-[#353634] text-[#ECEFE7] hover:bg-volcana-lime hover:text-[#181817] font-semibold">
                {dictionary.cards.card3.button}
              </Button>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
