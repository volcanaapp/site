export function Footer({ dictionary }: { dictionary: any }) {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {dictionary.copyright.replace('{year}', new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}