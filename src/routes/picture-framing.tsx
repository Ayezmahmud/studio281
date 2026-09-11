import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Box, CheckCircle2, PackageCheck, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EditorialCopy, Feature, ImagePanel, InfoGrid, Modal, PageIntro, SectionHeading, useReveal } from "@/components/site-ui";
import customImage from "@/assets/custom-frames.jpg";
import processImage from "@/assets/process-framing.jpg";

export const Route = createFileRoute("/picture-framing")({
  head: () => ({
    meta: [
      { title: "Picture Framing | Studio 281 Maylands" },
      { name: "description", content: "Custom picture framing in Maylands — premium timber, metal and acrylic mouldings, museum glass and conservation mounting, handmade in our studio." },
      { property: "og:title", content: "Custom Picture Framing — Studio 281" },
      { property: "og:description", content: "Your vision, our craft. Bespoke frames measured, cut and finished by hand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PictureFraming,
});

function PictureFraming() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="+ PICTURE FRAMING" title={<>Your Vision.<br />Our Craft.</>} body={<>Whether it’s a cherished memory, a meaningful gift or a statement piece, we create custom frames that bring your vision to life — measured, cut and finished by hand in Maylands.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="01" label="CUSTOM FRAMING" title={<>Frames made<br />to measure.</>} body={<>Choose from hundreds of mouldings, mats and<br className="hidden sm:block" /> glazing options. We guide you through every<br className="hidden sm:block" /> choice so the frame suits both the artwork<br className="hidden sm:block" /> and the room it lives in.</>} cta="Talk To Us" onClick={() => navigate({ to: "/contact" })} />
          <ImagePanel src={customImage} alt="Close-up of premium oak, walnut and white picture frames" onClick={() => setActiveImage({ src: customImage, alt: "Premium timber picture frames" })} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="02" label="OUR PROCESS" title={<>From Photo<br />to Frame.</>} body={<>We handle every step with care — from selecting<br className="hidden sm:block" /> the right materials to the final finish. Watch how<br className="hidden sm:block" /> your memories are transformed into timeless frames.</>} cta="Watch Our Process" onClick={() => setVideoOpen(true)} />
          <div className="relative">
            <ImagePanel src={processImage} alt="Professional framer assembling a timber picture frame" onClick={() => setVideoOpen(true)} />
            <Button aria-label="Play framing process video" onClick={() => setVideoOpen(true)} variant="outline" size="icon" className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-primary-foreground bg-primary/65 text-primary-foreground backdrop-blur-sm hover:bg-primary"><Play className="ml-1" fill="currentColor" /></Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1340px] border-t border-border px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <Feature icon={<Sparkles />} title="Premium Materials" text={<>Real wood, metal, acrylic<br />and museum glass.</>} />
          <Feature icon={<Box />} title="Custom Sizes" text={<>From small prints to<br />large statement pieces.</>} />
          <Feature icon={<CheckCircle2 />} title="Expert Craftsmanship" text={<>Handcrafted with care,<br />made to last.</>} />
          <Feature icon={<PackageCheck />} title="Fast & Safe Delivery" text={<>Your frames arrive safely,<br />ready to hang.</>} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <SectionHeading label="03 / FRAMING SERVICES" title={<>A comprehensive<br />framing service.</>} body={<>Our frames are produced in-house from quality materials to suit all budgets and purposes, including preservation framing techniques for delicate items. You name it, we frame it. If you cannot attend the gallery in person, we can still design a frame specification with you by phone or email.</>} />
          <InfoGrid
            items={[
              { title: "Consultation Process", lead: "In-person, phone or email", body: "The extensive knowledge, experience and design flair of the Studio 281 team delivers the best result every time, whether you are decorating your home or commissioning art for a large commercial project." },
              { title: "Bespoke Finishes & Moulding", lead: "Australian timbers", body: "Our comprehensive library of mouldings features Australian timbers alongside a curated selection of classic and contemporary styles. Mouldings are matched to your artwork in consultation, and additional hand finishes are available on request." },
              { title: "Canvas Services", lead: "Stretching & float framing", body: "We stretch rolled canvasses that are already painted or printed — as a stand-alone service, or with float framing to complete the presentation. We also manufacture blank artist canvasses in-house, specialising in extra large sizes." },
              { title: "Memorabilia Framing", lead: "Collections & artefacts", body: "Turning personal and historical treasures into custom wall art instantly adds vibrancy to a home, office or commercial space. Assembled collections of coins, maps, tickets and postcards create a uniquely rich display." },
              { title: "Hinged & Box Frames", lead: "Archival & preservation", body: "Archival and preservation techniques protect delicate items such as jewellery and original artworks. If you have something special to display that requires extra care, contact us today." },
              { title: "Bulk Framing & Deals", lead: "Special rates", body: "Exclusive rates apply to high volume orders where the frame specifications are the same or similar. Artists are also eligible for pricing deals on custom framing." },
              { title: "Mat Board Options", lead: "Coloured, suede, archival", body: "Mat board creates space between the artwork and the frame, acting as a bridge for a seamless finish. Options include coloured, suede, black core and museum grade archival board." },
              { title: "Glass Options", lead: "UV, clear & Perspex", body: "We offer 70% UV resistant glass to optimise clarity without reflection, as well as clear glass and Perspex. All provide outstanding protection for your valuable artwork." },
              { title: "Standard Poster Frames", lead: "Ready-made sizes", body: "Alongside made-to-measure work we stock standard poster frames, plus on-site consultation with your artwork, picture hanging solutions and artwork delivery." },
            ]}
          />
        </div>
      </section>

      <SiteFooter />
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
      {videoOpen && <Modal onClose={() => setVideoOpen(false)}><div className="relative w-[min(92vw,960px)] bg-primary"><img src={processImage} alt="Framer at work" className="w-full opacity-70" /><div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground"><Play className="size-14" fill="currentColor" /><p className="mt-5 font-display text-4xl">Made by hand.</p><p className="mt-2 text-xs">Every detail, measured and finished with care.</p></div></div></Modal>}
    </main>
  );
}
