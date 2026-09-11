import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mapsUrl } from "@/components/site-ui";

export const navItems = [
  { to: "/contact", label: "Contact" },
] as const;

const searchLinks = [
  { to: "/gallery-catalogue", label: "Gallery" },
  { to: "/picture-framing", label: "Custom framing" },
  { to: "/picture-hanging", label: "Picture hanging" },
  { to: "/contact", label: "Contact & directions" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className={`${overlay ? "absolute bg-background/70" : "fixed bg-background/95"} inset-x-0 top-0 z-30 h-20 border-b border-border/35 backdrop-blur-[3px]`}>
      <div className="mx-auto flex h-full max-w-[1460px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="text-left" aria-label="Studio 281 home">
          <span className="block font-display text-[25px] leading-[.75] font-semibold">Studio 281</span>
          <span className="mt-2 block text-[8px] font-semibold tracking-[.32em]">PICTURE FRAMERS</span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navItems.map(({ to, label }) => (
            <Link key={label} to={to} activeOptions={{ exact: true }} className="group text-[11px] font-medium tracking-[.14em] uppercase">
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-foreground group-data-[status=active]:border-foreground">{label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search" onClick={() => setSearchOpen(true)}><Search strokeWidth={1.5} /></Button>
          <Button variant="ghost" size="icon" aria-label="Contact Studio 281" asChild><a href="mailto:hello@studio281.com.au"><CircleUserRound strokeWidth={1.5} /></a></Button>
          <Button variant="ghost" size="icon" aria-label="Start a custom frame" asChild className="relative"><Link to="/picture-framing"><ShoppingBag strokeWidth={1.5} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-foreground" /></Link></Button>
          <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute inset-x-0 top-20 border-y border-border bg-background px-6 py-8 lg:hidden">
          <nav className="flex flex-col items-start gap-6">
            {navItems.map(({ to, label }) => <Link key={label} to={to} onClick={() => setMenuOpen(false)} className="font-display text-3xl">{label.replace("+ ", "")}</Link>)}
          </nav>
        </div>
      )}
      {searchOpen && (
        <Modal onClose={() => setSearchOpen(false)}>
          <div className="w-[min(90vw,620px)] bg-background p-8">
            <div className="flex items-center gap-3 border-b border-foreground pb-4"><Search className="size-5" /><input autoFocus aria-label="Search Studio 281" placeholder="Search frames, gallery, services…" className="w-full bg-transparent text-sm outline-none" /></div>
            <div className="mt-6 grid gap-3">
              {searchLinks.map(({ to, label }) => <Link key={label} to={to} onClick={() => setSearchOpen(false)} className="flex justify-between border-b border-border py-3 text-left text-sm">{label}<ArrowRight className="size-4" /></Link>)}
            </div>
          </div>
        </Modal>
      )}
    </header>
  );
}

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/picture-framing", label: "Picture Framing" },
  { to: "/picture-hanging", label: "Picture Hanging" },
  { to: "/gallery-catalogue", label: "Gallery" },
  { to: "/artists", label: "Artists" },
  { to: "/sign-up", label: "Sign-Up" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto grid max-w-[1460px] gap-12 px-6 py-14 md:grid-cols-[1.15fr_.7fr_1.35fr_1fr] lg:px-10">
        <div><p className="font-display text-[30px] leading-none font-semibold">Studio 281</p><p className="mt-2 text-[8px] font-semibold tracking-[.3em]">PICTURE FRAMERS</p><p className="mt-8 text-[11px] text-muted-foreground">Your memories. Framed beautifully.</p></div>
        <nav className="flex flex-col items-start gap-2 text-[11px]">{footerLinks.map(({ to, label }) => <Link key={label} to={to} className="hover:underline">{label}</Link>)}</nav>
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
      <div className="border-t border-border"><div className="mx-auto flex max-w-[1460px] flex-col gap-3 px-6 py-5 text-[8px] text-muted-foreground sm:flex-row sm:justify-between lg:px-10"><span>© 2025 Studio 281 Picture Framers. All rights reserved.</span><span className="flex gap-6"><Link to="/contact">Privacy Policy</Link><Link to="/contact">Terms &amp; Conditions</Link></span></div></div>
    </footer>
  );
}
