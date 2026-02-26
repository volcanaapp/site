"use client";

import { useState } from "react";
import { 
  Search, 
  Tag, 
  Package, 
} from "lucide-react";
import { cn } from "@/lib/utils";

type SkillCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  price_label: string;
  cost_label: string;
  button: string;
  icon: any;
  categoryColor: "lime" | "purple" | "gray";
  filterCategory: string; // To match with filter keys
};

export function SkillMarketplace({ dictionary }: { dictionary: any }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: dictionary.marketplace.filters.all },
    { key: "seo", label: dictionary.marketplace.filters.seo },
    { key: "conversion", label: dictionary.marketplace.filters.conversion },
    { key: "supply", label: dictionary.marketplace.filters.supply },
  ];

  const skills: SkillCard[] = [
    {
      id: "card1",
      category: dictionary.marketplace.cards.card1.category,
      title: dictionary.marketplace.cards.card1.title,
      description: dictionary.marketplace.cards.card1.description,
      price_label: dictionary.marketplace.cards.card1.price_label,
      cost_label: dictionary.marketplace.cards.card1.cost_label,
      button: dictionary.marketplace.cards.card1.button,
      icon: Search,
      categoryColor: "lime",
      filterCategory: "seo",
    },
    {
      id: "card2",
      category: dictionary.marketplace.cards.card2.category,
      title: dictionary.marketplace.cards.card2.title,
      description: dictionary.marketplace.cards.card2.description,
      price_label: dictionary.marketplace.cards.card2.price_label,
      cost_label: dictionary.marketplace.cards.card2.cost_label,
      button: dictionary.marketplace.cards.card2.button,
      icon: Tag,
      categoryColor: "purple",
      filterCategory: "conversion", // Mapping Strategy to Conversion/Sales for now
    },
    {
      id: "card3",
      category: dictionary.marketplace.cards.card3.category,
      title: dictionary.marketplace.cards.card3.title,
      description: dictionary.marketplace.cards.card3.description,
      price_label: dictionary.marketplace.cards.card3.price_label,
      cost_label: dictionary.marketplace.cards.card3.cost_label,
      button: dictionary.marketplace.cards.card3.button,
      icon: Package,
      categoryColor: "gray",
      filterCategory: "supply",
    },
  ];

  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.filterCategory === activeFilter);

  return (
    <section className="bg-[#181817] text-[#ECEFE7] py-24 font-sans min-h-screen">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-[#693EFE] text-[#693EFE] bg-[#693EFE]/10 mb-6">
            {dictionary.marketplace.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {dictionary.marketplace.title_part1}<br />
            {dictionary.marketplace.title_part2}
          </h1>
          <p className="text-[#9EA09A] text-lg md:text-xl leading-relaxed">
            {dictionary.marketplace.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                "px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base",
                activeFilter === filter.key
                  ? "border-[#D3FE3E] text-[#D3FE3E] bg-[#D3FE3E]/5"
                  : "border-[#353634] text-[#9EA09A] hover:border-[#D3FE3E]/50 hover:text-[#D3FE3E]/70"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.id}
              className={cn(
                "group bg-[#20201F] border border-[#353634] rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-95 fill-mode-both",
                skill.categoryColor === "purple" ? "hover:border-[#693EFE] hover:shadow-[0_10px_30px_rgba(105,62,254,0.1)]" : "hover:border-[#D3FE3E] hover:shadow-[0_10px_30px_rgba(211,254,62,0.1)]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={cn(
                  "px-3 py-1 rounded text-xs font-bold uppercase",
                  skill.categoryColor === "lime" && "bg-[#D3FE3E]/10 text-[#D3FE3E]",
                  skill.categoryColor === "purple" && "bg-[#693EFE]/10 text-[#8A68FE]",
                  skill.categoryColor === "gray" && "bg-[#353634] text-[#ECEFE7]"
                )}>
                  {skill.category}
                </span>
                <div className="p-2 bg-[#2A2A29] rounded-lg">
                  <skill.icon 
                    className={cn(
                      "w-6 h-6",
                      skill.categoryColor === "lime" && "text-[#D3FE3E]",
                      skill.categoryColor === "purple" && "text-[#8A68FE]",
                      skill.categoryColor === "gray" && "text-[#ECEFE7]"
                    )} 
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">{skill.title}</h3>
              <p className="text-[#9EA09A] text-sm leading-relaxed mb-8 flex-grow">
                {skill.description}
              </p>

              <div className="pt-6 border-t border-[#353634] flex items-center justify-between mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-lg">{skill.price_label}</span>
                  <span className="text-[#9EA09A] text-xs">{skill.cost_label}</span>
                </div>
                <button className="bg-[#353634] hover:bg-[#D3FE3E] hover:text-[#181817] text-[#ECEFE7] font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                  {skill.button}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}