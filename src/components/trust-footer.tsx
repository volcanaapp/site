
import Image from "next/image";

export function TrustFooter() {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src="/one-percent-logo.svg"
          alt="1% for the Planet Logo"
          width={100}
          height={80}
          className="opacity-60"
        />
      </div>
    </footer>
  );
}
