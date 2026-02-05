import Image from "next/image";
import Link from "next/link";

export function SocialImpactBar({ dictionary }: { dictionary: any }) {
  return (
    <section className="bg-[#181817] border-t border-[#353634] py-3">
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/one-percent-logo.svg"
            alt="1% for the Planet Logo"
            width={80}
            height={20}
            className="h-5 w-auto filter grayscale brightness-[3]"
          />
          <p className="text-sm font-normal text-[#ECEFE7] m-0">
            {dictionary.text}
            <Link
              href="https://www.onepercentfortheplanet.org/"
              target="_blank"
              className="font-semibold text-lime no-underline ml-2 hover:underline"
            >
              {dictionary.link} &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}