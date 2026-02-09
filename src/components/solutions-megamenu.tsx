"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function SolutionsMegamenu({ dictionary }: { dictionary: any }) {
  const solutionsDict = dictionary.megamenu.solutions;

  return (
    <div className="grid grid-cols-3 gap-8 p-6 w-[700px] lg:w-[850px]">
      <div className="col-span-1">
        <h3 className="text-2xl font-bold text-secondary mb-4">
          {solutionsDict.title}
        </h3>
      </div>
      <div className="col-span-1">
        <ul className="space-y-3">
          {solutionsDict.links.map((link: string, index: number) => (
            <li key={link}>
              <Link
                href="#"
                className="flex items-center text-foreground/80 hover:text-foreground font-medium group"
              >
                {link}
                {index === 3 && (
                  <ArrowRight className="ml-2 h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1">
        <p className="text-sm font-semibold mb-2">{solutionsDict.success_story.title}</p>
        <div className="relative rounded-lg overflow-hidden group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop"
            alt={solutionsDict.success_story.image_alt}
            width={400}
            height={300}
            className="object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-white font-semibold">
              {solutionsDict.success_story.description}
            </p>
            <div className="mt-2">
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}