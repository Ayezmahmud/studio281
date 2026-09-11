import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EditorialCopy, ImagePanel, Modal, PageIntro, artworks, useReveal } from "@/components/site-ui";
import inspirationImage from "@/assets/inspiration-frame.jpg";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists & Inspiration | Studio 281" },
      { name: "description", content: "Meet the artists we frame for and find ideas for your home, office or studio — a monochrome look at framing inspiration from Studio 281." },
      { property: "og:title", content: "+ Artists — Studio 281" },
      { property: "og:description", content: "Framing inspiration and the artists whose work fills our walls." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Artists;
});

function Artists() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="+ ARTISTS" title={<>Framing<br />Inspiration.</>} body={<>We work with local painters, illustrators and photographers. Browse a selection of their framed works and find ideas for your own walls.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="01" label="IDEAS & INSPIRATION" title={<>Ideas for<br />every wall.</>} body={<>Explore our collection of beautifully framed<br className="hidden sm:block" /> photos and artwork. Find ideas for your home,<br className="hidden sm:block" /> office or studio.</>} cta="Exhibit With Us" onClick={() => navigate({ to: "/contact" })} />
          <ImagePanel src={inspirationImage} alt="Black gallery frame above a minimal sideboard" onClick={() => setActiveImage({ src: inspirationImage, alt: "Black gallery frame above a sideboard" })} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <p className="text-[9px] font-semibold tracking-[.3em] text-muted-foreground">SELECTED WORKS</p>
          <h2 className="mt-3 font-display text-[30px] leading-tight font-semibold sm:text-[38px]">From our<br />artists.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.slice(0, 6).map((art) => (
              <button key={art.url} data-reveal onClick={() => setActiveImage({ src: art.url, alt: art.alt })} className="reveal-image group block w-full cursor-zoom-in overflow-hidden border border-border bg-secondary p-2">
                <img src={art.url} alt={art.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
    </main>
  );
}
