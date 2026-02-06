import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="w-full py-20 md:py-32 bg-background border-t border-border/40">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-border/40 p-8 transition-colors duration-300 ease-in-out hover:bg-secondary">
            <div>
              <div className="mb-12 flex items-start justify-between">
                <h2 className="text-4xl font-bold uppercase tracking-tighter transition-colors duration-300 ease-in-out group-hover:text-secondary-foreground md:text-5xl">
                  {dictionary.demo.title}
                </h2>
                <Link
                  href="#"
                  className="rounded-full border border-foreground p-3 transition-colors duration-300 ease-in-out hover:bg-foreground hover:text-background group-hover:border-secondary-foreground group-hover:text-secondary-foreground group-hover:hover:bg-secondary-foreground group-hover:hover:text-secondary"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
              <p className="max-w-md text-lg text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-secondary-foreground">
                {dictionary.demo.text}
              </p>
            </div>
          </div>
          <div className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-border/40 p-8 transition-colors duration-300 ease-in-out hover:bg-secondary">
            <div>
              <div className="mb-12 flex items-start justify-between">
                <h2 className="text-4xl font-bold uppercase tracking-tighter transition-colors duration-300 ease-in-out group-hover:text-secondary-foreground md:text-5xl">
                  {dictionary.about.title}
                </h2>
                <Link
                  href="/about"
                  className="rounded-full border border-foreground p-3 transition-colors duration-300 ease-in-out hover:bg-foreground hover:text-background group-hover:border-secondary-foreground group-hover:text-secondary-foreground group-hover:hover:bg-secondary-foreground group-hover:hover:text-secondary"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
              <p className="max-w-md text-lg text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-secondary-foreground">
                {dictionary.about.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}