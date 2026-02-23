"use client";

import { Badge } from "@/components/ui/badge";

export function PowerOfAutonomySection({ dictionary }: { dictionary: any }) {
  const columns = [
    {
      title: dictionary.insights.title,
      text: dictionary.insights.text,
      badge: "DATA LITERACY"
    },
    {
      title: dictionary.execution.title,
      text: dictionary.execution.text,
      badge: "AUTONOMOUS OPS"
    },
    {
      title: dictionary.agents.title,
      text: dictionary.agents.text,
      badge: "SCALABILITY"
    },
  ];

  return (
    <div className="dark">
      <section className="bg-background py-24 md:py-40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-volcana-lime/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-volcana-lime/10 to-transparent" />

        <div className="container max-w-screen-xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-4">
              {dictionary.title}
            </h2>
            <div className="w-24 h-1.5 bg-volcana-lime mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {columns.map((column, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative h-56 w-56 mb-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-volcana-lime/5 rounded-full scale-125 blur-2xl group-hover:bg-volcana-lime/10 transition-colors" />
                  <video
                    src="https://a.storyblok.com/f/314917/x/168e5e4f12/ai_solutions-loop.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain relative z-10 filter brightness-110 contrast-110"
                  />
                </div>
                
                <Badge variant="outline" className="mb-4 border-gray-800 text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                  {column.badge}
                </Badge>
                
                <h3 className="text-3xl font-black tracking-tighter mb-5 text-volcana-lime uppercase group-hover:scale-105 transition-transform">
                  {column.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                  {column.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}