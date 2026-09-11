import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Box, CheckCircle2, PackageCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EditorialCopy, Feature, ImagePanel, InfoGrid, Modal, SectionHeading, useReveal } from "@/components/site-ui";
import heroImage from "@/assets/studio281-hero.jpg";
import storyImage from "@/assets/story-frame.jpg";
import galleryImage from "@/assets/gallery-wall.jpg";
import customImage from "@/assets/custom-frames.jpg";

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

function StudioHome() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.055, 30)}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />

      <section className="relative min-h-[700px] overflow-hidden border-b border-border md:min-h-[760px] lg:min-h-[820px]">
        <img src={heroImage} alt="Studio wall displaying black, white and oak custom picture frames" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-[67%_center] motion-safe:[transform:translateY(var(--hero-shift,0px))_scale(1.04)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_90%,transparent)_56%,color-mix(in_oklab,var(--background)_20%,transparent)_100%)] md:bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_94%,transparent)_33%,transparent_61%)]" />
        <div className="relative mx-auto flex min-h-[700px] max-w-[1460px] items-center px-6 pt-20 md:min-h-[760px] lg:min-h-[820px] lg:px-10">
          <div className="animate-gentle-rise max-w-[500px] pb-12">
            <p className="mb-7 text-[10px] font-semibold tracking-[.32em]">CUSTOM PICTURE FRAMING</p>
            <h1 className="font-display text-[56px] leading-[.82] font-semibold sm:text-[78px] lg:text-[92px]">More than<br />just frames.</h1>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">We don’t just frame your photos,<br />we bring your memories to life.</p>
            <Button asChild className="mt-8 h-12 rounded-none px-6 text-[11px] font-medium"><Link to="/gallery-catalogue">Explore Our Collection <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-20 lg:px-10">
          <EditorialCopy number="01" label="OUR STORY" title={<>Custom Frames<br />for Every Story.</>} body={<>From modern minimalist frames to timeless<br className="hidden sm:block" /> classic styles, we craft each frame with care,<br className="hidden sm:block" /> precision, and a passion for detail. Your story<br className="hidden sm:block" /> deserves the perfect frame.</>} cta="Our Story" onClick={() => navigate({ to: "/contact" })} />
          <ImagePanel src={storyImage} alt="Close-up black picture frame with museum mat and coastline photograph" onClick={() => setActiveImage({ src: storyImage, alt: "Close-up black picture frame" })} />
        </div>
        <div className="mx-auto grid max-w-[1340px] border-t border-border px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <Feature icon={<Sparkles />} title="Premium Materials" text={<>Real wood, metal, acrylic<br />and museum glass.</>} />
          <Feature icon={<Box />} title="Custom Sizes" text={<>From small prints to<br />large statement pieces.</>} />
          <Feature icon={<CheckCircle2 />} title="Expert Craftsmanship" text={<>Handcrafted with care,<br />made to last.</>} />
          <Feature icon={<PackageCheck />} title="Fast & Safe Delivery" text={<>Your frames arrive safely,<br />ready to hang.</>} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="02" label="OUR GALLERY" title={<>Timeless frames<br />for every style.</>} body={<>Explore our collection of beautifully framed<br className="hidden sm:block" /> photos and artwork. Find ideas for your home,<br className="hidden sm:block" /> office or studio.</>} cta="View Gallery" onClick={() => navigate({ to: "/gallery-catalogue" })} />
          <ImagePanel src={galleryImage} alt="Curated wall of varied black, white and timber picture frames" onClick={() => setActiveImage({ src: galleryImage, alt: "Curated wall of picture frames" })} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="03" label="CUSTOM FRAMING" title={<>Your Vision.<br />Our Craft.</>} body={<>Whether it’s a cherished memory, a meaningful<br className="hidden sm:block" /> gift or a statement piece, we create custom frames<br className="hidden sm:block" /> that bring your vision to life.</>} cta="Start Your Custom Frame" onClick={() => navigate({ to: "/picture-framing" })} />
          <ImagePanel src={customImage} alt="Close-up of premium oak, walnut and white picture frames" onClick={() => setActiveImage({ src: customImage, alt: "Premium timber picture frames" })} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <SectionHeading label="04 / WHAT WE DO" title={<>A family owned business<br />in Maylands.</>} body={<>Made-to-measure picture frames are our specialty. We stock a range of high quality options to enhance the presentation of your artwork, large or small. We also offer standard poster frames, on-site consultation with your artwork, picture hanging solutions and artwork delivery. Our expert team are here to help.</>} />
          <InfoGrid
            items={[
              { title: "Picture Framing", lead: "Produced in-house", body: "A comprehensive framing service, made from quality materials to suit all budgets and purposes — including preservation techniques for delicate items. You name it, we frame it." },
              { title: "Picture Hanging", lead: "Private & commercial", body: "On-site picture hanging, gallery track systems and local artwork delivery. Our experience hanging entire exhibitions of 400+ paintings means you can be confident in our expertise." },
              { title: "Canvas Services", lead: "Made-to-measure", body: "We manufacture blank artist canvasses in-house, specialising in extra large sizes, and stretch rolled canvasses that are already painted or printed." },
              { title: "Artists", lead: "Established & emerging", body: "We proudly showcase visual artists in all mediums, including Desmond Sweeney, Richard Matias, Pippa McManus, Jodee Knowles and Peter Usher." },
              { title: "Consultation", lead: "In-person, phone or email", body: "Bring your artwork in and we will match mouldings, mats and glazing to it. If you cannot attend the gallery, we can design a frame specification remotely." },
              { title: "Visit The Gallery", lead: "281 Guildford Road, Maylands", body: "Monday to Thursday by appointment. Friday and Saturday walk-ins welcome. Appointments by text on 0423 903 511." },
            ]}
          />
        </div>
      </section>

      <SiteFooter />
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
    </main>
  );
}
