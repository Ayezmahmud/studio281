import { ArrowRight, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export const mapsUrl = "https://maps.app.goo.gl/beQpa2J2Hdd8z1EY9";

const artworkModules = import.meta.glob<{ default: { url: string } }>("../assets/gallery/*.asset.json", { eager: true });
export const artworks = Object.keys(artworkModules)
  .sort()
  .map((key, i) => ({ url: artworkModules[key]!.default.url, alt: `Framed original artwork ${i + 1} from the Studio 281 gallery catalogue` }));

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function EditorialCopy({ number, label, title, body, cta, onClick }: { number: string; label: string; title: React.ReactNode; body: React.ReactNode; cta: string; onClick: () => void }) {
  return <div data-reveal className="reveal-block max-w-[430px]"><div className="mb-4 flex items-center gap-3 text-[8px] font-medium tracking-[.12em]"><span>{number}</span><span className="h-px w-14 bg-foreground/35" /><span>{label}</span></div><h2 className="font-display text-[46px] leading-[.86] font-semibold sm:text-[54px]">{title}</h2><p className="mt-5 text-[11px] leading-[1.75] text-muted-foreground">{body}</p><button onClick={onClick} className="group mt-5 flex cursor-pointer items-center gap-5 border-b border-foreground pb-1 text-[10px] font-semibold">{cta}<ArrowRight className="size-3 transition-transform group-hover:translate-x-1.5" /></button></div>;
}

export function ImagePanel({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return <button data-reveal onClick={onClick} className="reveal-image group block w-full cursor-zoom-in overflow-hidden bg-secondary text-left"><img loading="lazy" src={src} alt={alt} width={1408} height={768} className="aspect-[1.82/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" /></button>;
}

export function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return <div className="border-b border-border py-9 sm:border-r sm:px-7 lg:border-b-0 first:pl-0 last:border-r-0"><div className="mb-5 [&_svg]:size-5 [&_svg]:stroke-[1.25]">{icon}</div><h3 className="text-[11px] font-semibold">{title}</h3><p className="mt-2 text-[9px] leading-relaxed text-muted-foreground">{text}</p></div>;
}

export function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => { const listener = (event: KeyboardEvent) => event.key === "Escape" && onClose(); document.addEventListener("keydown", listener); return () => document.removeEventListener("keydown", listener); }, [onClose]);
  return <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm" onClick={onClose}><Button aria-label="Close" variant="outline" size="icon" className="absolute right-5 top-5 rounded-full border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={onClose}><X /></Button><div onClick={(event) => event.stopPropagation()}>{children}</div></div>;
}

export function PageIntro({ label, title, body }: { label: string; title: React.ReactNode; body?: React.ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-[1340px] px-6 pb-12 pt-32 md:pb-14 md:pt-36 lg:px-10">
        <p className="text-[9px] font-semibold tracking-[.3em] text-muted-foreground">{label}</p>
        <h1 className="mt-4 font-display text-[44px] leading-[.88] font-semibold sm:text-[62px]">{title}</h1>
        {body && <p className="mt-6 max-w-[520px] text-[11px] leading-[1.85] text-muted-foreground">{body}</p>}
      </div>
    </section>
  );
}
