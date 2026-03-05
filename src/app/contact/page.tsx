import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${personal.name}. Schedule a call or connect on social media.`,
};

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Contact
        </h1>
        <p className="text-neutral-500">
          Let&apos;s connect. Schedule a call or find me on social media.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          Book a call
        </h2>
        <p className="text-neutral-600">
          Schedule a 30-minute call to discuss projects, collaboration, or
          opportunities.
        </p>
        <Button asChild>
          <a href={personal.calLink} target="_blank" rel="noopener noreferrer">
            Schedule on Cal.com
          </a>
        </Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900">Social</h2>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href="https://t.me/mrvin100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
          >
            Telegram
          </a>
          <span className="text-neutral-300">·</span>
          <a
            href="https://youtube.com/@jean-doe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
          >
            YouTube
          </a>
          <span className="text-neutral-300">·</span>
          <a
            href="https://devpost.com/mrvin100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
          >
            Devpost
          </a>
        </div>
      </div>
    </section>
  );
}
