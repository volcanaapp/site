import Image from "next/image";
import Link from "next/link";

export function TrustFooter() {
  return (
    <footer className="bg-white py-2 shadow-[0_-4px_14px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="https://www.onepercentfortheplanet.org/" target="_blank" className="flex items-center gap-3 group">
          <Image
            src="/one-percent-logo.svg"
            alt="1% for the Planet Logo"
            width={80}
            height={20}
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <p className="text-xs text-gray-500 group-hover:text-gray-800 transition-colors">
            Compromisso com a sustentabilidade. Saiba mais &rarr;
          </p>
        </Link>
      </div>
    </footer>
  );
}