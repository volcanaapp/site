import Image from "next/image";
import Link from "next/link";
import onePercentLogo from "/public/one-percent-logo.svg";

export function SocialImpactBar({ dictionary }: { dictionary: any }) {
  return (
    <section className="bg-primary py-3">
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-center gap-3 text-primary-foreground">
          <Image
            src={onePercentLogo}
            alt="1% for the Planet Logo"
            width={80}
            height={20}
            className="h-5 w-auto"
          />
          <p className="text-sm font-normal m-0">
            {dictionary.text}
            <Link
              href="https://www.onepercentfortheplanet.org/"
              target="_blank"
              className="font-semibold no-underline ml-2 hover:underline"
            >
              {dictionary.link} &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}