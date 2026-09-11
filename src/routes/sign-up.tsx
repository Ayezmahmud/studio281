import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PageIntro, useReveal } from "@/components/site-ui";
import storyImage from "@/assets/story-frame.jpg";

export const Route = createFileRoute("/sign-up")({
  head: () => ({
    meta: [
      { title: "Sign-Up | Studio 281 Picture Framers" },
      { name: "description", content: "Join the Studio 281 list for new artist releases, framing ideas and studio news from Maylands, Western Australia." },
      { property: "og:title", content: "Sign-Up — Studio 281" },
      { property: "og:description", content: "New artists, framing ideas and studio news, a few times a year." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignUp,
});

function SignUp() {
  const [sent, setSent] = useState(false);
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageIntro label="SIGN-UP" title={<>Join the<br />studio list.</>} body={<>New artist releases, framing ideas and studio news — a few emails a year, never more.</>} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1340px] gap-10 px-6 py-14 md:grid-cols-[.9fr_1.1fr] md:items-center md:py-16 lg:px-10">
          <div data-reveal className="reveal-block max-w-[430px]">
            {sent ? (
              <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 size-5" /><div><h2 className="font-display text-[34px] leading-none font-semibold">You’re on the list.</h2><p className="mt-4 text-[11px] leading-[1.8] text-muted-foreground">Thanks for signing up. We’ll be in touch when the next collection lands.</p></div></div>
            ) : (
              <form
                onSubmit={(event) => { event.preventDefault(); setSent(true); }}
                className="space-y-6"
              >
                <label className="block">
                  <span className="text-[9px] font-semibold tracking-[.2em] uppercase">Name</span>
                  <input required name="name" autoComplete="name" className="mt-2 w-full border-b border-foreground/40 bg-transparent pb-2 text-sm outline-none focus:border-foreground" />
                </label>
                <label className="block">
                  <span className="text-[9px] font-semibold tracking-[.2em] uppercase">Email</span>
                  <input required type="email" name="email" autoComplete="email" className="mt-2 w-full border-b border-foreground/40 bg-transparent pb-2 text-sm outline-none focus:border-foreground" />
                </label>
                <label className="block">
                  <span className="text-[9px] font-semibold tracking-[.2em] uppercase">What are you framing?</span>
                  <textarea name="message" rows={3} className="mt-2 w-full border-b border-foreground/40 bg-transparent pb-2 text-sm outline-none focus:border-foreground" />
                </label>
                <Button type="submit" className="h-12 w-full rounded-none text-[11px] font-medium sm:w-auto sm:px-8">Sign Up <ArrowRight /></Button>
              </form>
            )}
          </div>
          <div data-reveal className="reveal-image overflow-hidden bg-secondary">
            <img src={storyImage} alt="Black picture frame with museum mat and coastline photograph" loading="lazy" className="aspect-[1.4/1] w-full object-cover" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
