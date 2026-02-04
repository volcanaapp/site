import { CheckCircle, XCircle } from "lucide-react";

export function ComparisonGrid({ dictionary }: { dictionary: any }) {
  return (
    <section className="bg-card border-y">
      <div className="container py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.title}</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {dictionary.subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4">{dictionary.traditional_platform}</h3>
            <div className="flex items-center justify-center gap-4 text-destructive text-xl font-semibold">
              <XCircle className="h-8 w-8" />
              <span>{dictionary.traditional_fee}</span>
            </div>
            <p className="text-muted-foreground mt-4">
              {dictionary.traditional_description}
            </p>
          </div>
          <div className="bg-background rounded-lg p-8 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4">{dictionary.volcana_platform}</h3>
            <div className="flex items-center justify-center gap-4 text-primary text-xl font-semibold">
              <CheckCircle className="h-8 w-8" />
              <span>{dictionary.volcana_fee}</span>
            </div>
            <p className="text-muted-foreground mt-4">
              {dictionary.volcana_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}