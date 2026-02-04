import { CheckCircle, XCircle } from "lucide-react";

export function ComparisonGrid({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="bg-background relative -mt-24 rounded-t-3xl shadow-2xl pt-1">
        <div className="container py-20 md:py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            {dictionary.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="bg-card rounded-xl p-8 border border-border/40 flex flex-col transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6">{dictionary.traditional_platform}</h3>
              <div className="flex items-center gap-4 text-destructive text-3xl font-semibold mb-4">
                <XCircle className="h-9 w-9 flex-shrink-0" />
                <span>{dictionary.traditional_fee}</span>
              </div>
              <p className="text-muted-foreground mt-auto text-base">
                {dictionary.traditional_description}
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border-2 border-primary flex flex-col transition-transform duration-300 hover:-translate-y-2 shadow-lg shadow-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-primary">{dictionary.volcana_platform}</h3>
              <div className="flex items-center gap-4 text-primary text-3xl font-semibold mb-4">
                <CheckCircle className="h-9 w-9 flex-shrink-0" />
                <span>{dictionary.volcana_fee}</span>
              </div>
              <p className="text-muted-foreground mt-auto text-base">
                {dictionary.volcana_description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}