import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { EditorialCopy, ImagePanel, Modal, PageIntro, useReveal } from "@/components/site-ui";
import editorialImage from "@/assets/editorial-frames.jpg";
import galleryImage from "@/assets/gallery-wall.jpg";

export const Route = createFileRoute("/picture-hanging")({
  head: () => ({
    meta: [
      { title: "Picture Hanging Service | Studio 281" },
      { name: "description", content: "Professional picture hanging across Perth — gallery walls measured, levelled and securely fixed by the Studio 281 team." },
      { property: "og:title", content: "Picture Hanging — Studio 281" },
      { property: "og:description", content: "We measure, level and hang your framed works securely, wherever they live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PictureHanging,
});

function PictureHanging() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="PICTURE HANGING" title={<>Hung straight.<br />Hung safely.</>} body={<>From a single portrait to a full gallery wall, we plan the layout, mark the wall and fix each frame with the right hardware for the surface.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="01" label="OUR SERVICE" title={<>Your Walls.<br />Our Craft.</>} body={<>Brick, plaster, tile or timber — we bring the<br className="hidden sm:block" /> fixings, the levels and the patience. Homes,<br className="hidden sm:block" /> offices, cafés and exhibitions welcome.</>} cta="Book A Hanging" onClick={() => navigate({ to: "/contact" })} />
          <ImagePanel src={editorialImage} alt="Acrylic, white museum and black shadowbox frames" onClick={() => setActiveImage({ src: editorialImage, alt: "Museum and shadowbox frames" })} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-16 lg:px-10">
          <EditorialCopy number="02" label="GALLERY WALLS" title={<>Layouts that<br />sit right.</>} body={<>We lay your pieces out on the floor first, agree<br className="hidden sm:block" /> the spacing and eye line, then hang — so the<br className="hidden sm:block" /> wall works the first time.</>} cta="View Gallery" onClick={() => navigate({ to: "/gallery-catalogue" })} />
          <ImagePanel src={galleryImage} alt="Curated wall of varied black, white and timber picture frames" onClick={() => setActiveImage({ src: galleryImage, alt: "Curated gallery wall" })} />
        </div>
      </section>

      <SiteFooter />
      {activeImage && <Modal onClose={() => setActiveImage(null)}><img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain" /></Modal>}
    </main>
  );
}
