import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InfoGrid, Modal, PageIntro, SectionHeading, artworks, useReveal } from "@/components/site-ui";

export const Route = createFileRoute("/gallery-catalogue")({
  head: () => ({
    meta: [
      { title: "Gallery Catalogue | Studio 281 Picture Framers" },
      { name: "description", content: "Browse the Studio 281 gallery catalogue — original framed artworks, prints and portraits, each shown in its own frame." },
      { property: "og:title", content: "Gallery Catalogue — Studio 281" },
      { property: "og:description", content: "Framed works, one by one. Click any piece to view it large." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryCatalogue,
});

function GalleryCatalogue() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="GALLERY CATALOGUE" title={<>Framed works,<br />one by one.</>} body={<>Every piece below is shown in its own frame. Click an artwork to view it larger, then tell us which moulding, mat and glazing you would like.</>} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {artworks.map((art, i) => (
              <button
                key={art.url}
                data-reveal
                onClick={() => setActiveImage({ src: art.url, alt: art.alt })}
                className="reveal-image group mb-5 block w-full cursor-zoom-in overflow-hidden border border-border bg-secondary p-2 shadow-sm transition-shadow hover:shadow-lg"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <img src={art.url} alt={art.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1340px] px-6 py-14 md:py-16 lg:px-10">
          <SectionHeading label="ORDERING FROM THE CATALOGUE" title={<>How framing works.</>} body={<>Every frame is produced in-house from quality materials to suit all budgets and purposes. Tell us the piece you like and we will match a moulding, mat and glazing to it.</>} />
          <InfoGrid
            items={[
              { title: "Moulding Library", lead: "Classic & contemporary", body: "A comprehensive library featuring Australian timbers plus classic and contemporary profiles, matched to your artwork in consultation. Hand finishes on request." },
              { title: "Mats & Glazing", lead: "Archival options", body: "Coloured, suede, black core and museum grade archival mat board, with 70% UV resistant glass, clear glass or Perspex to protect the work." },
              { title: "Artists & Bulk Orders", lead: "Special rates", body: "Exclusive rates apply to high volume orders with the same or similar specifications, and artists are eligible for pricing deals on custom framing." },
            ]}
          />
        </div>
      </section>

      <SiteFooter />
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
    </main>
  );
}
