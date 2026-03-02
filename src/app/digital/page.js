"use client";

import MargueeWrapper from "@/components/MargueeWrapper";
import Hero from "@/components/Main/Hero";
import About from "@/components/Digital/About";
import Experience from "@/components/Digital/Experience";
import Provision from "@/components/Digital/Provision";
import Advantages from "@/components/Digital/Advantages";
import Smm from "@/components/Digital/Smm";
import Target from "@/components/Digital/Target";
import Pr from "@/components/Digital/Pr";
import WeHere from "@/components/Digital/WeHere";
import Brand from "@/components/Digital/Brand";
import Info from "@/components/Digital/Info";
import Client1 from "@/components/Digital/Client1";
import Client2 from "@/components/Digital/Client2";
import Client3 from "@/components/Digital/Client3";
import WhyUs from "@/components/Digital/WhyUs";
import { useI18n } from "@/i18n/useI18n";

export default function DigitalPage() {
  const { t } = useI18n();
  return (
    <div>
      <MargueeWrapper name="DIGITAL [3]" />
      <Hero top={t("Events.Hero.top")} bottom={t("Events.Hero.bottom")} />
      <About />
      <Experience />
      <Provision />
      <Advantages />
      <Smm />
      <Target />
      <Pr />
      <WeHere />
      <Brand />
      <Info />
      <Client1 />
      <Client2 />
      <Client3 />
      <WhyUs />
    </div>
  );
}
