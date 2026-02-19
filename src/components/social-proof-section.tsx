"use client";

import { WaitlistLogoCloud } from "./waitlist-logo-cloud";

export function SocialProofSection({ title }: { title: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
          {title}
        </h2>
        <div className="px-4">
          <WaitlistLogoCloud />
        </div>
      </div>
    </section>
  );
}