import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PageIntro, mapsUrl, useReveal } from "@/components/site-ui";
import processImage from "@/assets/process-framing.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions | Studio 281 Maylands" },
      { name: "description", content: "Visit Studio 281 Picture Framers at 281 Guildford Rd, Maylands WA 6051. Call +61 423 903 511 or get directions." },
      { property: "og:title", content: "Contact Studio 281 Picture Framers" },
      { property: "og:description", content: "281 Guildford Rd, Maylands WA 6051 — open until 5 PM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="CONTACT" title={<>Come in,<br />bring the art.</>} body={<>Drop by the studio on Guildford Road, call us, or send a photo of the piece you would like framed and we will quote from there.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.85fr_1.15fr] md:py-16 lg:px-10">
          <div data-reveal className="reveal-block space-y-6 text-[11px] leading-relaxed">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:underline"><MapPin className="mt-0.5 size-4 shrink-0" />281 Guildford Rd, Maylands WA 6051, Australia</a>
            <p className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0" />Mon – Fri 9 AM – 5 PM · Sat by appointment</p>
            <a href="tel:+61423903511" className="flex gap-3 hover:underline"><Phone className="mt-0.5 size-4 shrink-0" />+61 423 903 511</a>
            <a href="mailto:hello@studio281.com.au" className="flex gap-3 hover:underline"><Mail className="mt-0.5 size-4 shrink-0" />hello@studio281.com.au</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 bg-primary px-6 py-4 text-[10px] font-semibold text-primary-foreground">Get Directions <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <div data-reveal className="reveal-image overflow-hidden bg-secondary">
            <img src={processImage} alt="Studio 281 framer at work in the Maylands workshop" loading="lazy" className="aspect-[1.7/1] w-full object-cover" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
