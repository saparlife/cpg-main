"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CTASection from "./CTASection";
import Studio from "./Studio";
import OurClients from "./OurClients";
import { useI18n } from "@/i18n/useI18n";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroIntroStagger, heroIntroItem, reducedMotion, viewportConfig } from "@/lib/animations";
import DragCursor from "@/components/DragCursor";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const slidesData = [
  {
    logo: "/images/clients/client-1.svg",
    events: ["items.0.events.0", "items.0.events.1", "items.0.events.2"],
    content: ["items.0.content.0", "items.0.content.1"],
    socialMedia: ["items.0.socialMedia.0", "items.0.socialMedia.1", "items.0.socialMedia.2"],
  },
  {
    logo: "/images/clients/client-2.svg",
    events: ["items.1.events.0", "items.1.events.1", "items.1.events.2"],
    content: ["items.1.content.0", "items.1.content.1", "items.1.content.2"],
    socialMedia: ["items.1.socialMedia.0", "items.1.socialMedia.1"],
  },
  {
    logo: "/images/clients/client-3.svg",
    events: ["items.2.events.0", "items.2.events.1", "items.2.events.2"],
    content: ["items.2.content.0"],
    socialMedia: ["items.2.socialMedia.0", "items.2.socialMedia.1", "items.2.socialMedia.2"],
  },
  {
    logo: "/images/clients/client-4.svg",
    events: ["items.3.events.0", "items.3.events.1", "items.3.events.2"],
    content: ["items.3.content.0", "items.3.content.1"],
    socialMedia: ["items.3.socialMedia.0", "items.3.socialMedia.1"],
  },
  {
    logo: "/images/clients/client-5.svg",
    events: ["items.4.events.0", "items.4.events.1", "items.4.events.2"],
    content: ["items.4.content.0", "items.4.content.1"],
    socialMedia: ["items.4.socialMedia.0", "items.4.socialMedia.1"],
  },
  {
    logo: "/images/clients/client-6.svg",
    events: ["items.5.events.0", "items.5.events.1"],
    content: ["items.5.content.0", "items.5.content.1"],
    socialMedia: ["items.5.socialMedia.0", "items.5.socialMedia.1", "items.5.socialMedia.2"],
  },
];

export default function TrustSwiperSection() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateCases = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const rotateWhichSpeak = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  return (
    <section id="cases" className="relative">
      <div className="sm:px-0 px-5">
        <div className="max-w-[1351px] sm:px-5 mx-auto w-full">
          <div ref={headerRef} className="relative z-50 flex justify-center items-center">
            <motion.h1
              className="text-6xl lg:text-[120px] font-gotham uppercase flex flex-col lg:flex-row lg:gap-[10px] items-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
              style={{ y: prefersReducedMotion ? 0 : y }}
            >
              <motion.span
                className="text-parrot-1100"
                variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
                style={{ rotateZ: prefersReducedMotion ? 0 : rotateCases }}
              >
                {t("Main.Portfolio.title.cases")}
              </motion.span>
              <motion.div
                className="flex items-center leading-tight flex-col text-2xl lg:text-[45px]"
                variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
                style={{ rotateZ: prefersReducedMotion ? 0 : rotateWhichSpeak }}
              >
                <span className="text-stroke text-transparent">{t("Main.Portfolio.title.which")}</span>
                <span className="text-white pl-[80px]">{t("Main.Portfolio.title.speak")}</span>
              </motion.div>
            </motion.h1>
          </div>
        </div>
        <DragCursor>
          <Swiper
            className="!pb-[100px] mt-10"
            spaceBetween={30}
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="!w-[250px] lg:!w-[450px] !h-auto">
                <div className="relative rounded-[25px] bg-black-1300 h-full flex flex-col">
                  <div className="bg-white sm:px-11 px-6 rounded-t-[25px] relative flex-shrink-0">
                    <Image src="/images/card-bg.svg" alt="" width={300} height={100} className="w-full h-auto" />
                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center pointer-events-none">
                      <Image
                        src={slide.logo}
                        alt="Client Logo"
                        width={150}
                        height={80}
                        className="w-[100px] h-[60px] lg:w-[150px] lg:h-[80px] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Image src="/images/card-line.svg" alt="" width={450} height={20} className="h-[10px] lg:h-[20px] w-full" />
                  </div>
                  <div className="rounded-b-[25px] flex flex-col px-4 py-4 lg:px-12 lg:py-6 flex-grow min-h-[250px] lg:min-h-[350px]">
                    <h3 className="text-parrot-1100 text-sm lg:text-lg font-gotham">
                      {t("Main.Portfolio.categories.event")}
                    </h3>
                    <ol className="list-disc mb-4 pl-4">
                      {slide.events.map((s, i) => (
                        <li key={i} className="text-xs lg:text-base font-gothammedium leading-5 font-medium text-white">
                          {t(`Main.Portfolio.${s}`)}
                        </li>
                      ))}
                    </ol>
                    <h3 className="text-parrot-1100 text-sm lg:text-lg font-gotham">
                      {t("Main.Portfolio.categories.content")}
                    </h3>
                    <ol className="list-disc mb-4 pl-4">
                      {slide.content.map((s, i) => (
                        <li key={i} className="text-xs lg:text-base font-gothammedium leading-5 font-medium text-white">
                          {t(`Main.Portfolio.${s}`)}
                        </li>
                      ))}
                    </ol>
                    <h3 className="text-parrot-1100 text-sm lg:text-lg font-gotham">
                      {t("Main.Portfolio.categories.social")}
                    </h3>
                    <ol className="list-disc pl-4">
                      {slide.socialMedia.map((s, i) => (
                        <li key={i} className="text-xs lg:text-base font-gothammedium leading-5 font-medium text-white">
                          {t(`Main.Portfolio.${s}`)}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="w-full flex items-center justify-center p-5">
                    <div className="bg-parrot-1100 w-[50%] h-[5px] rounded-2xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DragCursor>
        <Studio />
        <OurClients />
        {/* CTA Section */}
        <CTASection />
      </div>
      <Image src="/images/shape3.svg" alt="" width={1920} height={800} className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-[1]" />
    </section>
  );
}
