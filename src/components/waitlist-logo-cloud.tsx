import { integrationLogos } from "./integration-logos";
import Image from "next/image";
import styles from "./waitlist-logo-cloud.module.css";

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

  const logos: Record<string, any> = {
    ...integrationLogos,
    google: () => <Image src="/google-logo.png" alt="Google" width={90} height={32} className="h-8 w-auto" />,
  };

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className={`flex w-max items-center gap-x-12 ${styles.scroller}`}>
        {[...logosToShow, ...logosToShow].map((key, index) => {
          const LogoComponent = logos[key];
          return (
            <div
              key={`${key}-${index}`}
              className="h-8 flex-shrink-0 text-muted-foreground/60 grayscale transition-all hover:grayscale-0"
            >
              {LogoComponent && <LogoComponent className="h-full w-auto" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}