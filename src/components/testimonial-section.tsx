import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialSection({ dictionary }: { dictionary: any }) {
  return (
    <div className="dark">
      <section className="w-full bg-background py-20 md:py-32">
        <div className="container max-w-screen-md mx-auto text-center">
          <figure>
            <blockquote>
              <p className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                "{dictionary.quote}"
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt={dictionary.author} crossOrigin="anonymous" />
                <AvatarFallback>{dictionary.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-bold text-foreground">{dictionary.author}</div>
                <div className="text-muted-foreground">{dictionary.author_title}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}