"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { CtaButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Locale } from "@/lib/i18n-config";

const SplineAnimation = dynamic(() => import("@/components/spline-animation"), {
  ssr: false,
});

interface HeroV2Props {
  dictionary: {
    title: string;
    subtitle: string;
    promptPlaceholder: string;
    ctaButton: string;
    suggestedPrompts: string[];
  };
  lang: Locale;
}

export default function HeroV2({ dictionary, lang }: HeroV2Props) {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const typewriterText = useTypewriter(prompt);

  const handleSuggestedPromptClick = (text: string) => {
    setPrompt(text);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <SplineAnimation scene="https://prod.spline.design/Qk3-9a9-9Qv5anU4/scene.splinecode" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-4xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          {dictionary.title}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          {dictionary.subtitle}
        </motion.p>

        <motion.div
          className="w-full max-w-2xl"
          variants={itemVariants}
        >
          <motion.div
            className="relative rounded-lg p-1 transition-all duration-300"
            animate={{
              boxShadow: isFocused
                ? "0 0 20px 5px rgba(208, 255, 5, 0.3)"
                : "0 0 0px 0px rgba(208, 255, 5, 0)",
            }}
          >
            <div className="relative flex items-center">
              <Sparkles className="absolute left-4 h-6 w-6 text-volcana-lime" />
              <Input
                type="text"
                placeholder={dictionary.promptPlaceholder}
                value={typewriterText}
                onChange={(e) => setPrompt(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="h-16 w-full rounded-md border-2 border-gray-700 bg-gray-900/80 pl-14 pr-40 text-white placeholder:text-gray-500 focus:border-volcana-lime focus:ring-0"
              />
              <div className="absolute right-2">
                <CtaButton href="/waitlist" lang={lang}>
                  {dictionary.ctaButton}
                </CtaButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
            variants={itemVariants}
          >
            {dictionary.suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSuggestedPromptClick(p)}
                className="rounded-full border border-gray-600 bg-gray-800/50 px-4 py-1.5 text-sm text-gray-300 transition-all hover:border-volcana-lime hover:bg-volcana-lime/10 hover:text-white"
              >
                {p}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
