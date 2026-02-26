"use client";

import { Globe } from "@/components/ui/globe";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function GlobalPresenceSection() {
  const locations = [
    {
      country: "United States",
      city: "San Francisco / New York",
      description: "Strategic Headquarters",
    },
    {
      country: "Brazil",
      city: "São Paulo",
      description: "Engineering & R&D",
    },
    {
      country: "Latin America",
      city: "Mexico / Colombia / Chile",
      description: "Regional Operations",
    },
  ];

  return (
    <section className="w-full bg-black py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-volcana-lime/50 text-volcana-lime font-mono tracking-widest uppercase">
                Global Infrastructure
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
                Borderless Commerce.<br />
                <span className="text-gray-500">Local Intelligence.</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                We operate seamlessly across the Americas, bridging the gap between Silicon Valley innovation and Latin American market expertise.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.country}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="mt-1 bg-volcana-lime/10 p-2 rounded-lg group-hover:bg-volcana-lime/20 transition-colors">
                    <MapPin className="w-5 h-5 text-volcana-lime" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-volcana-lime transition-colors">
                      {loc.country}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">{loc.city}</p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-mono">
                      {loc.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Globe Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:justify-end -mr-20 lg:-mr-40"
          >
            <div className="relative w-full max-w-[800px] aspect-square">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-volcana-lime/10 blur-[120px] rounded-full opacity-40 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-volcana-lime/5 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
              <Globe className="w-full h-full scale-125 md:scale-150 transform-gpu" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}