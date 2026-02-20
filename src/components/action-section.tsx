"use client";

import { useRef, useState, useEffect } from 'react';
import { OptimizedWaitlistForm } from "./optimized-waitlist-form";
import Image from "next/image";
import Link from "next/link";

export function ActionSection() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setComponentHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    setComponentHeight();
    window.addEventListener('resize', setComponentHeight);

    return () => window.removeEventListener('resize', setComponentHeight);
  }, []);

  return (
    <>
      {/* Spacer to prevent content from being overlapped by the fixed bar */}
      <div style={{ height: `${height}px` }} />

      <div ref={ref} className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white">
        {/* Original ActionSection content */}
        <section className="w-full pt-6 pb-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Junte-se ao Futuro do E-commerce Agêntico
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Mais de 1.284 líderes já garantiram acesso prioritário. Não fique de fora.
              </p>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <OptimizedWaitlistForm />
            </div>
          </div>
        </section>

        {/* TrustFooter content */}
        <footer className="bg-[#D3FE3E] py-2">
          <div className="container mx-auto flex justify-center items-center">
            <Link href="https://www.onepercentfortheplanet.org/" target="_blank" className="flex items-center gap-3 group">
              <Image
                src="/one-percent-logo.svg"
                alt="1% for the Planet Logo"
                width={80}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                Compromisso com a sustentabilidade. Saiba mais &rarr;
              </p>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}