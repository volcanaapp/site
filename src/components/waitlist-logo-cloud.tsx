import { integrationLogos } from "./integration-logos";

export function WaitlistLogoCloud() {
  const logosToShow = [
    "totvs",
    "sap",
    "salesforce",
    "stripe",
    "loggi",
    "meta_ads",
    "google",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {logosToShow.map((key) => {
        const LogoComponent = integrationLogos[key];
        return (
          <div key={key} className="h-8 text-muted-foreground/60 grayscale hover:grayscale-0 transition-all">
            {LogoComponent && <LogoComponent className="h-full w-auto" />}
          </div>
        );
      })}
    </div>
  );
}