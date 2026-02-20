import React from 'react';

// Placeholders for existing logos
const TotvsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">TOTVS</text></svg>
);
const SapLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 80 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">SAP</text></svg>
);
const SalesforceLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 180 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">salesforce</text></svg>
);
const StripeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">stripe</text></svg>
);
const LoggiLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">loggi</text></svg>
);
const MetaAdsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 150 30" {...props}><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">Meta Ads</text></svg>
);

// New Google Logo
const GoogleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 98.2 32" {...props}>
    <path fill="#4285f4" d="M15.2 21.3c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zm14 0c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4z" />
    <path fill="#ea4335" d="M36.2 21.3c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zm14 0c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4z" />
    <path fill="#fbbc05" d="M57.2 21.3c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zm14 0c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4z" />
    <path fill="#4285f4" d="M75.2 14.3h-2.5v14h-3v-14h-2.5v-2.5h8v2.5z" />
    <path fill="#34a853" d="M85.2 28.3c-2.5 0-4.5-1.8-5.2-4.1l2.7-1.1c.4 1.4 1.6 2.3 3 2.3 1.8 0 2.9-1.2 2.9-2.8v-.2h-.1c-.5.6-1.5 1.1-2.8 1.1-2.6 0-5-2.3-5-5.3s2.4-5.3 5-5.3c1.3 0 2.3.5 2.8 1.1h.1v-.2c0-1.6-1.1-2.8-2.9-2.8-1.4 0-2.6.9-3-2.3l-2.7-1.1c.7-2.3 2.7-4.1 5.2-4.1 3.3 0 5.9 2.2 5.9 5.6v9.7c0 3.3-2.6 5-5.9 5zm.3-8c-1.4 0-2.9 1.2-2.9 2.8s1.5 2.8 2.9 2.8 2.9-1.2 2.9-2.8-1.5-2.8-2.9-2.8z" />
    <path fill="#ea4335" d="M9.2 14.3H3.3v14h3v-8.3c0-2.3 1.8-3.8 3.8-3.8h.1v-2.8c-1 0-2-.1-2-.1z" />
  </svg>
);

export const integrationLogos: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  totvs: TotvsLogo,
  sap: SapLogo,
  salesforce: SalesforceLogo,
  stripe: StripeLogo,
  loggi: LoggiLogo,
  meta_ads: MetaAdsLogo,
  google: GoogleLogo,
};