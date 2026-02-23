"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Linkedin, Globe, MapPin, Check, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const PrivacyChoiceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M1.833 6.166A5.5 5.5 0 1 0 1.833.5a5.5 5.5 0 0 0 0 11.333m0-11.333h11.666a5.5 5.5 0 0 1 0 11h-11.666" stroke="currentColor" strokeWidth="2"/>
    <path d="M7.666 3.666 4.833 8.333l-1.5-2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Produto", href: "#" },
    { label: "Soluções", href: "#" },
    { label: "Comparativo", href: "#" },
    { label: "Sobre nós", href: "/about" },
    { label: "Contato", href: "#" },
  ];

  return (
    <footer className="bg-[#F3F4F6] text-gray-800 border-t border-gray-200 relative z-[60]">
      {/* 1% For the Planet Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full bg-[#D3FE3E] py-3 border-b border-[#c2ea39]"
      >
        <div className="container mx-auto flex justify-center items-center">
          <Link
            href="https://www.onepercentfortheplanet.org/"
            target="_blank"
            className="flex items-center gap-3 group px-4"
          >
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
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Addresses */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Volcana, LLC</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {/* USA */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>United States (HQ)</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-5.5">
                    7345 W Sand Lake Rd<br/>
                    Orlando, FL
                  </p>
                </div>

                {/* Brazil */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Brasil</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-5.5">
                    Rua Mal. Deodoro<br/>
                    Curitiba, Paraná
                  </p>
                </div>

                {/* Argentina */}
                <div className="space-y-1 sm:col-span-2">
                   <div className="flex items-center gap-2 text-gray-900 font-bold text-sm mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Argentina</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-5.5">
                    Buenos Aires
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
             <h4 className="font-bold text-gray-900 mb-6">Navegação</h4>
             <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-600 hover:text-[#A3C934] transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <span className="font-bold text-gray-900 block mb-4">Receba nossa Newsletter</span>
            <p className="text-sm text-gray-500 mb-4">Fique por dentro das novidades sobre IA e E-commerce.</p>
            <div className="flex w-full shadow-sm">
              <Input 
                type="email" 
                placeholder="Seu e-mail corporativo" 
                className="bg-white border-none rounded-r-none h-11 w-full focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              />
              <Button className="bg-[#1C1C1B] text-white hover:bg-[#D3FE3E] hover:text-black rounded-l-none h-11 px-6 font-medium transition-colors">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Black Bar */}
      <div className="bg-black text-white py-8 border-t border-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left: Region Selector */}
            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer transition-colors order-2 lg:order-1">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Brasil | Português</span>
            </div>

            {/* Center: Legal Links */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm text-gray-400 order-3 lg:order-2">
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">Termos de serviço</Link>
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">Informações legais</Link>
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">Política de privacidade</Link>
              <Link href="#" className="hover:text-white transition-colors whitespace-nowrap">Mapa do site</Link>
              <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap">
                Suas opções de privacidade
                <div className="bg-[#0066CC] rounded-full p-[2px] w-5 h-5 flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </Link>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4 order-1 lg:order-3">
              <Link href="#" className="text-white hover:text-[#D3FE3E] transition-colors p-2 rounded-full hover:bg-white/10">
                <Facebook className="h-5 w-5 fill-current" />
              </Link>
              <Link href="#" className="text-white hover:text-[#D3FE3E] transition-colors p-2 rounded-full hover:bg-white/10">
                <XIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-[#D3FE3E] transition-colors p-2 rounded-full hover:bg-white/10">
                <Youtube className="h-5 w-5 fill-current" />
              </Link>
              <Link href="#" className="text-white hover:text-[#D3FE3E] transition-colors p-2 rounded-full hover:bg-white/10">
                <Linkedin className="h-5 w-5 fill-current" />
              </Link>
            </div>

          </div>
          
          <div className="mt-8 text-center lg:text-left text-gray-600 text-xs border-t border-white/10 pt-4 lg:hidden">
            © {currentYear} Volcana, LLC. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}