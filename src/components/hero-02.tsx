import { Boxes, Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

type AgentCardProps = {
  icon: React.ReactNode;
  name: string;
  description: string;
  badge: string;
  className?: string;
};

function AgentCard({ icon, name, description, badge, className }: AgentCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 border border-glow/20 relative overflow-hidden",
        "transition-all duration-300 hover:border-glow hover:shadow-2xl hover:shadow-glow/20 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {badge}
        </div>
      </div>
      <h3 className="text-xl font-bold text-card-foreground">{name}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
}

export function Hero02({ dictionary }: { dictionary: any }) {
  const agents = [
    {
      name: dictionary.agent.seo.name,
      description: dictionary.agent.seo.desc,
      icon: <Search className="h-6 w-6" />,
      className: "md:col-span-2",
    },
    {
      name: dictionary.agent.stock.name,
      description: dictionary.agent.stock.desc,
      icon: <Boxes className="h-6 w-6" />,
      className: "md:col-span-1",
    },
    {
      name: dictionary.agent.sales.name,
      description: dictionary.agent.sales.desc,
      icon: <ShoppingCart className="h-6 w-6" />,
      className: "md:col-span-3",
    },
  ];

  return (
    <div className="dark">
      <section className="bg-background py-20 md:py-32">
        <div className="container max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {dictionary.hero2.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dictionary.hero2.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard
                key={agent.name}
                name={agent.name}
                description={agent.description}
                icon={agent.icon}
                badge={dictionary.hero2.active_badge}
                className={agent.className}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}