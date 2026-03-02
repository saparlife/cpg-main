"use client";

import { useI18n } from "@/i18n/useI18n";
import MargueeWrapper from "@/components/MargueeWrapper";
import Hero from "@/components/Main/Hero";
import About from "@/components/Events/About";
import Features from "@/components/Events/Features";
import Culture from "@/components/Events/Culture";
import Forums from "@/components/Events/Forums";
import Teambuildings from "@/components/Events/Teambuildings";
import Education from "@/components/Events/Education";
import Suvenirs from "@/components/Events/Suvenirs";
import Projects from "@/components/Events/Projects";
import Newyear from "@/components/Events/Newyear";
import Client1 from "@/components/Events/Client1";
import Client2 from "@/components/Events/Client2";
import Client3 from "@/components/Events/Client3";
import Client4 from "@/components/Events/Client4";
import Client5 from "@/components/Events/Client5";
import Client6 from "@/components/Events/Client6";
import Trust from "@/components/Events/Trust";
import WhyUs from "@/components/Events/WhyUs";

export default function EventPage() {
  const { t } = useI18n();

  return (
    <div className="overflow-hidden">
      <MargueeWrapper name="EVENT [1]" />
      <Hero
        top={t("Events.Hero.top")}
        bottom={t("Events.Hero.bottom")}
        imageUrl="/images/img2.png"
        videoUrl="/videos/events_1.webm"
      />
      <About />
      <Features />
      <Culture />
      <Forums />
      <Teambuildings />
      <Education />
      <Suvenirs />
      <Projects />
      <Newyear />
      <Client1 />
      <Client2 />
      <Client3 />
      <Client4 />
      <Client5 />
      <Client6 />
      <Trust />
      <WhyUs />
    </div>
  );
}
