import Image from "next/image";
import Link from "next/link";

export function TrustFooter() {
  return (
    <footer className="bg-[#D3FE3E] py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
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
  );
}