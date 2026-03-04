import { notFound } from "next/navigation";
import LandingRenderer from "@/landing/LandingRenderer";

// Import all configs statically — compatible with static generation
import newHome from "@/landing/configs/new-home.json";
import newEvents from "@/landing/configs/new-events.json";
import newDigital from "@/landing/configs/new-digital.json";
import newContent from "@/landing/configs/new-content.json";
import newContact from "@/landing/configs/new-contact.json";

const configs = {
  "new-home": newHome,
  "new-events": newEvents,
  "new-digital": newDigital,
  "new-content": newContent,
  "new-contact": newContact,
};

export function generateStaticParams() {
  return Object.keys(configs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const config = configs[params.slug];
  if (!config) return {};
  return {
    title: config.metadata.title,
    description: config.metadata.description,
  };
}

export default function LandingPage({ params }) {
  const config = configs[params.slug];
  if (!config) notFound();
  return <LandingRenderer sections={config.sections} />;
}
