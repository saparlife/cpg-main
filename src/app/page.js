"use client";

import Hero from "@/components/Main/Hero";
import About from "@/components/Main/About";
import Portfolio from "@/components/Main/Portfolio";
import Banner from "@/components/Main/Banner";
import { useI18n } from "@/i18n/useI18n";

export default function Home() {
  const { t, language } = useI18n();
  let videoUrl = "/videos/cpg_15sec_eng.webm";

  if (language === "kz") {
    videoUrl = "/videos/cpg_15sec_eng_h264_KZSUB.webm";
  } else if (language === "ru") {
    videoUrl = "/videos/cpg_15sec_eng_h264_RUSUB.webm";
  }
  return (
    <>
      <Banner />
      <Hero
        top={t("Main.Hero.title")}
        bottom={t("Main.Hero.subtitle")}
        imageUrl="/images/img1.png"
        videoUrl={videoUrl}
      />
      <About />
      <Portfolio />
    </>
  );
}
