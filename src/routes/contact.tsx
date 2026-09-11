import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InfoGrid, PageIntro, SectionHeading, mapsUrl, useReveal } from "@/components/site-ui";
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
      <PageIntro label="CONTACT" title={<>Come in,<br />bring the art.</>} body={<>Appointments can be made via text on 0423 903 511. Framing, quotes and general enquiries are welcome by email — send a photo of the piece you would like framed and we will quote from there.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.85fr_1.15fr] md:py-16 lg:px-10">
          <div data-reveal className="reveal-block space-y-6 text-[11px] leading-relaxed">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:underline"><MapPin className="mt-0.5 size-4 shrink-0" />281 Guildford Rd, Maylands WA 6051, Australia</a>
            <p className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0" />Monday – Thursday: by appointment service<br />Friday – Saturday: walk-ins welcome</p>
            <a href="tel:+61423903511" className="flex gap-3 hover:underline"><Phone className="mt-0.5 size-4 shrink-0" />0423 903 511 — text for appointments</a>
            <a href="mailto:studio281gallery@gmail.com" className="flex gap-3 hover:underline"><Mail className="mt-0.5 size-4 shrink-0" />studio281gallery@gmail.com</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 bg-primary px-6 py-4 text-[10px] font-semibold text-primary-foreground">Get Directions <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <div data-reveal className="reveal-image overflow-hidden bg-secondary">
            <img src={processImage} alt="Studio 281 framer at work in the Maylands workshop" loading="lazy" className="aspect-[1.7/1] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <SectionHeading label="VISITING THE GALLERY" title={<>How to reach us.</>} body={<>Studio 281 is a family owned and operated business in Maylands. Whether you are framing a single photograph or commissioning work for a commercial fit-out, our expert team are here to help.</>} />
          <InfoGrid
            columns={3}
            items={[
              { title: "Appointments", lead: "Text 0423 903 511", body: "Monday to Thursday we run an appointment service so you get dedicated time with a framer and your artwork. Friday and Saturday, walk-ins are welcome." },
              { title: "Quotes & Enquiries", lead: "studio281gallery@gmail.com", body: "Email dimensions or a photo of your piece and we will come back with framing options and a quote. Remote consultations by phone or email are available." },
              { title: "Find Us", lead: "281 Guildford Road, Maylands WA 6051", body: "On-site parking and street parking are close by. Bring your artwork in and we will match mouldings, mats and glazing to it in person." },
            ]}
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
