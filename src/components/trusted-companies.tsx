"use client";

import { WaitlistLogoCloud } from './waitlist-logo-cloud';

export function TrustedCompanies() {
  return (
    <div className="py-16 bg-white relative z-10">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-8">
          EMPRESAS QUE CONFIAM NA VOLCANA
        </h3>
        <WaitlistLogoCloud />
      </div>
    </div>
  );
}