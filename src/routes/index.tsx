import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  CircleUserRound,
  Instagram,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/studio281-hero.jpg";
import storyImage from "@/assets/story-frame.jpg";
import galleryImage from "@/assets/gallery-wall.jpg";
import customImage from "@/assets/custom-frames.jpg";
import processImage from "@/assets/process-framing.jpg";
import inspirationImage from "@/assets/inspiration-frame.jpg";
import editorialImage from "@/assets/editorial-frames.jpg";

const mapsUrl = "https://maps.app.goo.gl/beQpa2J2Hdd8z1EY9";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio 281 | Custom Picture Framers Maylands" },
      { name: "description", content: "Beautifully handcrafted custom picture frames in Maylands, WA. Premium materials, museum glass and expert local craftsmanship." },
      { property: "og:title", content: "Studio 281 Picture Framers" },
      { property: "og:description", content: "Your memories, framed beautifully in Maylands, Western Australia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioHome,
});

const sections = [
  { id: "gallery", number: "02", label: "OUR GALLERY", title: <>Timeless frames<br />for every style.</>, body: <>Explore our collection of beautifully framed<br className="hidden sm:block" /> photos and artwork. Find ideas for your home,<br className="hidden sm:block" /> office or studio.</>, cta: "View Gallery", image: galleryImage, alt: "Curated wall of varied black, white and timber picture frames" },
  { id: "custom", number: "03", label: "CUSTOM FRAMING", title: <>Your Vision.<br />Our Craft.</>, body: <>Whether it’s a cherished memory, a meaningful<br className="hidden sm:block" /> gift or a statement piece, we create custom frames<br className="hidden sm:block" /> that bring your vision to life.</>, cta: "Start Your Custom Frame", image: customImage, alt: "Close-up of premium oak, walnut and white picture frames" },
  { id: "process", number: "04", label: "OUR PROCESS", title: <>From Photo<br />to Frame.</>, body: <>We handle every step with care — from selecting<br className="hidden sm:block" /> the right materials to the final finish. Watch how<br className="hidden sm:block" /> your memories are transformed into timeless frames.</>, cta: "Watch Our Process", image: processImage, alt: "Professional framer assembling a timber picture frame", video: true },
  { id: "ideas", number: "05", label: "IDEAS & INSPIRATION", title: <>Framing<br />Inspiration.</>, body: <>Explore our collection of beautifully framed<br className="hidden sm:block" /> photos and artwork. Find ideas for your home,<br className="hidden sm:block" /> office or studio.</>, cta: "View Ideas", image: inspirationImage, alt: "Black gallery frame above a minimal sideboard" },
  { id: "services", number: "06", label: "OUR GALLERY", title: <>Your Vision.<br />Our Craft.</>, body: <>Whether it’s a cherished memory, a meaningful<br className="hidden sm:block" /> gift or a statement piece, we create custom frames<br className="hidden sm:block" /> that bring your vision to life.</>, cta: "Start Your Custom Frame", image: editorialImage, alt: "Acrylic, white museum and black shadowbox frames" },
];

function StudioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--hero-shift", `${Math.min(y * 0.055, 30)}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <main ref={pageRef} className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 h-20 border-b border-border/35 bg-background/70 backdrop-blur-[3px]">
        <div className="mx-auto flex h-full max-w-[1460px] items-center justify-between px-6 lg:px-10">
          <button onClick={() => scrollTo("home")} className="cursor-pointer text-left" aria-label="Studio 281 home">
            <span className="block font-display text-[25px] leading-[.75] font-semibold">Studio 281</span>
            <span className="mt-2 block text-[8px] font-semibold tracking-[.32em]">PICTURE FRAMERS</span>
          </button>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {[['home','Home'],['about','About Us'],['services','Services'],['gallery','Gallery'],['contact','Contact']].map(([id,label]) => <button key={id} onClick={() => scrollTo(id)} className="group cursor-pointer text-[11px] font-medium"><span className="border-b border-transparent pb-1 transition-colors group-hover:border-foreground">{label}</span></button>)}
          </nav>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Search" onClick={() => setSearchOpen(true)}><Search strokeWidth={1.5} /></Button>
            <Button variant="ghost" size="icon" aria-label="Contact Studio 281" asChild><a href="mailto:hello@studio281.com.au"><CircleUserRound strokeWidth={1.5} /></a></Button>
            <Button variant="ghost" size="icon" aria-label="Start a custom frame" onClick={() => scrollTo("custom")} className="relative"><ShoppingBag strokeWidth={1.5} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-foreground" /></Button>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <div className="absolute inset-x-0 top-20 border-y border-border bg-background px-6 py-8 lg:hidden"><nav className="flex flex-col items-start gap-6">{[['home','Home'],['about','About Us'],['services','Services'],['gallery','Gallery'],['contact','Contact']].map(([id,label]) => <button key={id} onClick={() => scrollTo(id)} className="font-display text-3xl">{label}</button>)}</nav></div>}
      </header>

      <section id="home" className="relative min-h-[700px] overflow-hidden border-b border-border md:min-h-[760px] lg:min-h-[820px]">
        <img src={heroImage} alt="Studio wall displaying black, white and oak custom picture frames" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-[67%_center] motion-safe:[transform:translateY(var(--hero-shift,0px))_scale(1.04)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_94%,transparent)_33%,transparent_61%)]" />
        <div className="relative mx-auto flex min-h-[700px] max-w-[1460px] items-center px-6 pt-20 md:min-h-[760px] lg:min-h-[820px] lg:px-10">
          <div className="animate-gentle-rise max-w-[500px] pb-12">
            <p className="mb-7 text-[10px] font-semibold tracking-[.32em]">CUSTOM PICTURE FRAMING</p>
            <h1 className="font-display text-[64px] leading-[.79] font-semibold sm:text-[78px] lg:text-[92px]">More than<br />just frames.</h1>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">We don’t just frame your photos,<br />we bring your memories to life.</p>
            <Button onClick={() => scrollTo("gallery")} className="mt-8 h-12 rounded-none px-6 text-[11px] font-medium">Explore Our Collection <ArrowRight /></Button>
          </div>
          <button onClick={() => scrollTo("about")} className="absolute bottom-7 left-6 flex cursor-pointer flex-col items-center gap-2 lg:left-10" aria-label="Scroll to our story"><span className="h-8 w-px bg-foreground/40" /><span className="animate-scroll-cue text-[9px] [writing-mode:vertical-rl]">Scroll</span></button>
        </div>
      </section>

      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-20 lg:px-10">
          <EditorialCopy number="01" label="OUR STORY" title={<>Custom Frames<br />for Every Story.</>} body={<>From modern minimalist frames to timeless<br className="hidden sm:block" /> classic styles, we craft each frame with care,<br className="hidden sm:block" /> precision, and a passion for detail. Your story<br className="hidden sm:block" /> deserves the perfect frame.</>} cta="Our Story" onClick={() => scrollTo("contact")} />
          <ImagePanel src={storyImage} alt="Close-up black picture frame with museum mat and coastline photograph" onClick={() => setActiveImage({src: storyImage, alt: "Close-up black picture frame"})} />
        </div>
        <div className="mx-auto grid max-w-[1340px] border-t border-border px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <Feature icon={<Sparkles />} title="Premium Materials" text={<>Real wood, metal, acrylic<br />and museum glass.</>} />
          <Feature icon={<Box />} title="Custom Sizes" text={<>From small prints to<br />large statement pieces.</>} />
          <Feature icon={<CheckCircle2 />} title="Expert Craftsmanship" text={<>Handcrafted with care,<br />made to last.</>} />
          <Feature icon={<PackageCheck />} title="Fast & Safe Delivery" text={<>Your frames arrive safely,<br />ready to hang.</>} />
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.number} id={section.id} className="border-b border-border">
          <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
            <EditorialCopy number={section.number} label={section.label} title={section.title} body={section.body} cta={section.cta} onClick={() => section.video ? setVideoOpen(true) : section.id === "gallery" || section.id === "ideas" ? setActiveImage({src: section.image, alt: section.alt}) : scrollTo("contact")} />
            <div className="relative">
              <ImagePanel src={section.image} alt={section.alt} onClick={() => section.video ? setVideoOpen(true) : setActiveImage({src: section.image, alt: section.alt})} />
              {section.video && <Button aria-label="Play framing process video" onClick={() => setVideoOpen(true)} variant="outline" size="icon" className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-primary-foreground bg-primary/65 text-primary-foreground backdrop-blur-sm hover:bg-primary"><Play className="ml-1" fill="currentColor" /></Button>}
            </div>
          </div>
        </section>
      ))}

      <footer id="contact" className="bg-background">
        <div className="mx-auto grid max-w-[1460px] gap-12 px-6 py-14 md:grid-cols-[1.15fr_.7fr_1.35fr_1fr] lg:px-10">
          <div><p className="font-display text-[30px] leading-none font-semibold">Studio 281</p><p className="mt-2 text-[8px] font-semibold tracking-[.3em]">PICTURE FRAMERS</p><p className="mt-8 text-[11px] text-muted-foreground">Your memories. Framed beautifully.</p></div>
          <nav className="flex flex-col items-start gap-2 text-[11px]">{[['home','Home'],['about','About Us'],['services','Services'],['gallery','Gallery'],['contact','Contact']].map(([id,label]) => <button key={id} onClick={() => scrollTo(id)} className="cursor-pointer hover:underline">{label}</button>)}</nav>
          <address className="space-y-3 text-[10px] not-italic leading-relaxed">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:underline"><MapPin className="mt-0.5 size-3.5 shrink-0" />281 Guildford Rd, Maylands WA 6051, Australia</a>
            <p className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-foreground" />Open · Closes 5 PM</p>
            <a href="tel:+61423903511" className="flex gap-3 hover:underline"><Phone className="size-3.5" />+61 423 903 511</a>
            <a href="https://studio281.com.au" target="_blank" rel="noreferrer" className="flex gap-3 hover:underline"><Mail className="size-3.5" />studio281.com.au</a>
            <div className="flex gap-4 pt-2"><a href="https://instagram.com" aria-label="Instagram"><Instagram className="size-4" /></a><a href="https://facebook.com" aria-label="Facebook" className="font-display text-base font-semibold">f</a><a href="https://pinterest.com" aria-label="Pinterest" className="font-display text-base font-semibold">p</a></div>
          </address>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="group relative min-h-36 overflow-hidden border border-border bg-secondary p-5">
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:25px_25px]" />
            <div className="relative flex h-full flex-col justify-between"><div className="flex items-start gap-2"><MapPin className="mt-1 size-5" fill="currentColor" /><div><b className="text-[11px]">Studio 281</b><p className="text-[9px] text-muted-foreground">Picture Framers</p></div></div><span className="flex items-center justify-between bg-primary px-4 py-3 text-[9px] text-primary-foreground">Get Directions <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></span></div>
          </a>
        </div>
        <div className="border-t border-border"><div className="mx-auto flex max-w-[1460px] flex-col gap-3 px-6 py-5 text-[8px] text-muted-foreground sm:flex-row sm:justify-between lg:px-10"><span>© 2025 Studio 281 Picture Framers. All rights reserved.</span><span className="flex gap-6"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></span></div></div>
      </footer>

      {searchOpen && <Modal onClose={() => setSearchOpen(false)}><div className="w-[min(90vw,620px)] bg-background p-8"><div className="flex items-center gap-3 border-b border-foreground pb-4"><Search className="size-5" /><input autoFocus aria-label="Search Studio 281" placeholder="Search frames, gallery, services…" className="w-full bg-transparent text-sm outline-none" /></div><div className="mt-6 grid gap-3">{[['gallery','Gallery'],['custom','Custom framing'],['process','Our process'],['contact','Contact & directions']].map(([id,label]) => <button key={id} className="flex cursor-pointer justify-between border-b border-border py-3 text-left text-sm" onClick={() => scrollTo(id)}>{label}<ArrowRight className="size-4" /></button>)}</div></div></Modal>}
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
      {videoOpen && <Modal onClose={() => setVideoOpen(false)}><div className="relative w-[min(92vw,960px)] bg-primary"><img src={processImage} alt="Framer at work" className="w-full opacity-70" /><div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground"><Play className="size-14" fill="currentColor" /><p className="mt-5 font-display text-4xl">Made by hand.</p><p className="mt-2 text-xs">Every detail, measured and finished with care.</p></div></div></Modal>}
    </main>
  );
}

function EditorialCopy({ number, label, title, body, cta, onClick }: { number: string; label: string; title: React.ReactNode; body: React.ReactNode; cta: string; onClick: () => void }) {
  return <div data-reveal className="reveal-block max-w-[430px]"><div className="mb-4 flex items-center gap-3 text-[8px] font-medium tracking-[.12em]"><span>{number}</span><span className="h-px w-14 bg-foreground/35" /><span>{label}</span></div><h2 className="font-display text-[46px] leading-[.86] font-semibold sm:text-[54px]">{title}</h2><p className="mt-5 text-[11px] leading-[1.75] text-muted-foreground">{body}</p><button onClick={onClick} className="group mt-5 flex cursor-pointer items-center gap-5 border-b border-foreground pb-1 text-[10px] font-semibold">{cta}<ArrowRight className="size-3 transition-transform group-hover:translate-x-1.5" /></button></div>;
}

function ImagePanel({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return <button data-reveal onClick={onClick} className="reveal-image group block w-full cursor-zoom-in overflow-hidden bg-secondary text-left"><img loading="lazy" src={src} alt={alt} width={1408} height={768} className="aspect-[1.82/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]" /></button>;
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return <div className="border-b border-border py-9 sm:border-r sm:px-7 lg:border-b-0 first:pl-0 last:border-r-0"><div className="mb-5 [&_svg]:size-5 [&_svg]:stroke-[1.25]">{icon}</div><h3 className="text-[11px] font-semibold">{title}</h3><p className="mt-2 text-[9px] leading-relaxed text-muted-foreground">{text}</p></div>;
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => { const listener = (event: KeyboardEvent) => event.key === "Escape" && onClose(); document.addEventListener("keydown", listener); return () => document.removeEventListener("keydown", listener); }, [onClose]);
  return <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm" onClick={onClose}><Button aria-label="Close" variant="outline" size="icon" className="absolute right-5 top-5 rounded-full border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={onClose}><X /></Button><div onClick={(event) => event.stopPropagation()}>{children}</div></div>;
}
