import { LOGO_SHOWCASE } from "./trust-social-proof.constants";

export function LogoShowcase() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      {LOGO_SHOWCASE.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.name}
          src={item.logo}
          alt={item.name}
          className="h-8 w-24 object-contain"
        />
      ))}
    </div>
  );
}