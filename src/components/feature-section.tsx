import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeatureSection({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="w-full bg-background py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-screen-xl">
          <div className="flex flex-col items-start text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              <span className="text-muted-foreground">{dictionary.title_part1}</span>
              <br />
              <span className="text-foreground">{dictionary.title_part2}</span>
            </h2>
            <p className="text-xl text-foreground font-medium">
              {dictionary.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              {dictionary.description1}
            </p>
            <p className="text-lg text-foreground max-w-md font-semibold">
              {dictionary.description2}
            </p>
            <Button size="lg" className="font-bold text-lg py-6 px-8 bg-primary-foreground text-background hover:bg-primary-foreground/90 rounded-lg mt-4">
              {dictionary.cta}
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://a.storyblok.com/f/314917/1634x1248/c71656cb82/mbp.png"
              alt="Product screenshot on a laptop"
              width={1634}
              height={1248}
              className="w-full max-w-2xl mx-auto"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>
    </div>
  );
}