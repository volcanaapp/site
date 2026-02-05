import React from 'react';

const LogoTotvs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 32V0H10.5V26.5H21V32H0Z" fill="currentColor"/>
    <path d="M36.5 32C29.5 32 25 27.5 25 20C25 12.5 29.5 8 36.5 8C43.5 8 48 12.5 48 20C48 27.5 43.5 32 36.5 32ZM36.5 27C39.5 27 42 25 42 20C42 15 39.5 13 36.5 13C33.5 13 31 15 31 20C31 25 33.5 27 36.5 27Z" fill="currentColor"/>
    <path d="M63.5 32C56.5 32 52 27.5 52 20C52 12.5 56.5 8 63.5 8C70.5 8 75 12.5 75 20C75 27.5 70.5 32 63.5 32ZM63.5 27C66.5 27 69 25 69 20C69 15 66.5 13 63.5 13C60.5 13 58 15 58 20C58 25 60.5 27 63.5 27Z" fill="currentColor"/>
    <path d="M89 32V8H94V27C94 29 95 30 97 30C99 30 100 29 100 27V8H105V27C105 30.5 102 32 99.5 32C96.5 32 94.5 31 94 30V32H89Z" fill="currentColor"/>
    <path d="M112 32V8H128V13H117V18H127V23H117V32H112Z" fill="currentColor"/>
  </svg>
);

const LogoSap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0 H100 V50 H0 Z" fill="#00A1F1"/>
    <path d="M10 40 V10 H30 V18 H18 V24 H28 V32 H18 V40 H10 Z" fill="white"/>
    <path d="M40 40 L40 10 L55 25 L40 40 Z M55 10 L70 40 L55 10 Z" fill="white"/>
    <path d="M75 40 V10 H90 C95 10 100 15 100 25 C100 35 95 40 90 40 H75 Z M83 18 V32 H90 C92 32 94 30 94 25 C94 20 92 18 90 18 H83 Z" fill="white"/>
  </svg>
);

const LogoMercadoPago = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="currentColor">mercado pago</text>
  </svg>
);

const LogoStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M26 0V52H0V0H26Z" fill="currentColor"/>
    <path d="M58 26V0H32V26C32 39 43 52 58 52V26Z" fill="currentColor"/>
    <path d="M91 0V52H65V0H91Z" fill="currentColor"/>
    <path d="M130 26C130 11 118 0 104 0V52C118 52 130 40 130 26Z" fill="currentColor"/>
  </svg>
);

const LogoLoggi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="5" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">loggi</text>
  </svg>
);

const LogoSalesforce = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="currentColor">salesforce</text>
  </svg>
);

const LogoMeta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="20" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">Meta</text>
  </svg>
);

const LogoRdStation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="currentColor">RD Station</text>
  </svg>
);

export const integrationLogos: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  totvs: LogoTotvs,
  sap: LogoSap,
  mercado_pago: LogoMercadoPago,
  stripe: LogoStripe,
  loggi: LogoLoggi,
  salesforce: LogoSalesforce,
  meta_ads: LogoMeta,
  rd_station: LogoRdStation,
};