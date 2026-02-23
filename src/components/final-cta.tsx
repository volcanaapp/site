import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA({ dictionary, lang }: { dictionary: any, lang: string }) {
  return (
    <section className="w-full py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Demo Card */}
          <Link
            href={`/${lang}/waitlist`}
            className="group flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-gray-50/50 p-10 lg:p-14 transition-all duration-500 ease-out hover:bg-black hover:border-black shadow-sm hover:shadow-2xl hover:-translate-y-2"
          >
            <div>
              <div className="mb-16 flex items-start justify-between">
                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black group-hover:text-volcana-lime leading-[0.9]">
                  {dictionary.demo.title.split(' ').map((word: string, i: number) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h2>
                <div className="rounded-full border border-black p-4 transition-all duration-500 group-hover:border-volcana-lime group-hover:bg-volcana-lime group-hover:text-black">
                  <ArrowUpRight className="h-8 w-8" />
                </div>
              </div>
              <p className="max-w-[280px] text-xl font-medium text-gray-600 transition-colors duration-500 group-hover:text-gray-400">
                {dictionary.demo.text}
              </p>
            </div>
          </Link>

          {/* About Card */}
          <Link
            href={`/${lang}/about`}
            className="group flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-10 lg:p-14 transition-all duration-500 ease-out hover:bg-volcana-lime hover:border-volcana-lime shadow-sm hover:shadow-2xl hover:-translate-y-2"
          >
            <div>
              <div className="mb-16 flex items-start justify-between">
                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-[0.9]">
                  {dictionary.about.title.split(' ').map((word: string, i: number) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h2>
                <div className="rounded-full border border-black p-4 transition-all duration-500 group-hover:bg-black group-hover:text-volcana-lime">
                  <ArrowUpRight className="h-8 w-8" />
                </div>
              </div>
              <p className="max-w-[280px] text-xl font-medium text-gray-600 transition-colors duration-500 group-hover:text-black/70">
                {dictionary.about.text}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}