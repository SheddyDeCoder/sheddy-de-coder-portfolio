import Image from "next/image";
import { LOGO_SHOWCASE } from "./trust-social-proof.constants";

export function LogoShowcase() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      {LOGO_SHOWCASE.map((item) => (
        <div key={item.name} className="relative h-8 w-24">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}