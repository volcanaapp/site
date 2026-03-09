"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const themes = [
  {
    id: 1,
    title: "Tema Varejo Moderno",
    segment: "Varejo",
    imageUrl: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Tema Indústria Eficiente",
    segment: "Industria",
    imageUrl: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Tema DTC Vibrante",
    segment: "DTC",
    imageUrl: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Tema Varejo Clássico",
    segment: "Varejo",
    imageUrl: "/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Tema Indústria Tech",
    segment: "Industria",
    imageUrl: "/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "Tema DTC Minimalista",
    segment: "DTC",
    imageUrl: "/placeholder-6.jpg",
  },
];

type Segment = "Todos" | "Varejo" | "Industria" | "DTC";

export default function ThemeShowcase() {
  const [activeSegment, setActiveSegment] = useState<Segment>("Todos");

  const filteredThemes =
    activeSegment === "Todos"
      ? themes
      : themes.filter((theme) => theme.segment === activeSegment);

  const segments: Segment[] = ["Todos", "Varejo", "Industria", "DTC"];

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-screen-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Comece com um tema feito para o seu negócio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Escolha um ponto de partida e personalize-o para se adequar à sua marca.
        </p>

        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {segments.map((segment) => (
            <Button
              key={segment}
              variant={activeSegment === segment ? "default" : "outline"}
              onClick={() => setActiveSegment(segment)}
              className="rounded-full"
            >
              {segment}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.map((theme) => (
            <Card key={theme.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={`https://picsum.photos/seed/${theme.id}/600/450`}
                    alt={theme.title}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{theme.title}</h3>
                  <p className="text-sm text-indigo-500 mt-1">{theme.segment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
