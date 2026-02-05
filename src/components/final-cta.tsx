import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full py-20 md:py-32 bg-background border-t border-border/40">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-border/40">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                  {dictionary.demo.title}
                </h2>
                <Link href="#" className="border border-foreground rounded-full p-3 hover:bg-foreground hover:text-background transition-colors">
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                {dictionary.demo.text}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-border/40">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                  {dictionary.about.title}
                </h2>
                <Link href="#" className="border border-foreground rounded-full p-3 hover:bg-foreground hover:text-background transition-colors">
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                {dictionary.about.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}