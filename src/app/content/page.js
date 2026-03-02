"use client";
import MargueeWrapper from "@/components/MargueeWrapper";
import About from "@/components/Content/About";
import Hero from "@/components/Main/Hero";
import Service from "@/components/Content/Service";
import Documentary from "@/components/Content/Documentary";
import Advertisement from "@/components/Content/Advertisement";
import Info from "@/components/Content/Info";
import Animation from "@/components/Content/Animation";
import Clips from "@/components/Content/Clips";
import KeyVisual from "@/components/Content/KeyVisual";
import VideoServices from "@/components/Content/VideoServices";
import Approach from "@/components/Content/Approach";
import WhyUs from "@/components/Content/WhyUs";
import { useI18n } from "@/i18n/useI18n";

export default function ContentPage() {
  const { t } = useI18n();
  return (
    <div>
      <MargueeWrapper name="CONTENT [3]" />
      <Hero
        top={t("Content.Hero.top")}
        bottom={t("Content.Hero.bottom")}
        imageUrl="/images/img3.png"
        videoUrl="/videos/2_1.webm"
      />
      <About />
      <Service />
      <Documentary />
      <Advertisement />
      <Info />
      <Animation />
      <Clips />
      <KeyVisual />
      <VideoServices />
      <Approach />
      <WhyUs />
    </div>
  );
}
