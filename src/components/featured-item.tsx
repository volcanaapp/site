import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface FeaturedItemProps {
  imageSrc: string;
  alt: string;
  badgeText: string;
  description: string;
  linkText: string;
}

export function FeaturedItem({ imageSrc, alt, badgeText, description, linkText }: FeaturedItemProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl w-full max-w-sm mx-auto aspect-[3/4]">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <Badge className="bg-volcana-lime text-black hover:bg-volcana-lime/90 mb-3 text-[10px] font-black uppercase tracking-widest py-0.5 px-2.5">
          {badgeText}
        </Badge>
        <p className="text-white font-bold text-xl leading-tight mb-4 group-hover:text-volcana-lime transition-colors">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-300 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
          {linkText}
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}