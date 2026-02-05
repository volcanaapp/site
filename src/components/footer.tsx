import Link from "next/link";
import { Logo } from "./logo";

export function Footer({ dictionary, footerDictionary }: { dictionary: any, footerDictionary: any }) {
  const columns = footerDictionary.columns;

  return (
    <footer className="dark bg-background text-foreground border-t border-border/40">
      <div className="container max-w-screen-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-2">
            <Logo className="h-8 mb-6" />
            <p className="text-muted-foreground mb-2">{footerDictionary.contact_slogan}</p>
            <a
              href={`mailto:${footerDictionary.contact_email}`}
              className="text-primary font-medium hover:underline"
            >
              {footerDictionary.contact_email}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-4">
            <div>
              <h4 className="font-bold text-foreground mb-4">{columns.platform.title}</h4>
              <ul className="space-y-3">
                {columns.platform.links.map((link: string) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">{columns.solutions.title}</h4>
              <ul className="space-y-3">
                {columns.solutions.links.map((link: string) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">{columns.resources.title}</h4>
              <ul className="space-y-3">
                {columns.resources.links.map((link: string) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">{columns.company.title}</h4>
              <ul className="space-y-3">
                {columns.company.links.map((link: string) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {dictionary.copyright.replace('{year}', new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}