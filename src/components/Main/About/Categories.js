"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import HoverCard from "@/components/Motion/HoverCard";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fadeUpItemStagger, fadeUpItem, reducedMotion, viewportConfig } from "@/lib/animations";

export default function Categories() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="grid lg:grid-cols-3 md:grid-cols-2 2xl:gap-[50px] gap-5 xl:pb-[175px] sm:pb-20 pb-10 md:pb-[100px] relative z-[1]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpItemStagger}
    >
      <ScrollItem
        href="/content"
        image="/images/content-img-1.png"
        alt="Content Production"
        title={t("services.content.title")}
        subtitle={t("services.content.name")}
        description={t("services.content.description")}
        scrollRange={[80, -40]}
        prefersReducedMotion={prefersReducedMotion}
      />
      <ScrollItem
        href="/events"
        image="/images/event-img-1.png"
        className="lg:-mt-[143px]"
        alt="Event Organization"
        title={t("services.events.title")}
        subtitle={t("services.events.name")}
        description={t("services.events.description")}
        scrollRange={[60, -30]}
        prefersReducedMotion={prefersReducedMotion}
      />
      <ScrollItem
        href="/digital"
        className="lg:-mt-[286px]"
        image="/images/digital-img-1.png"
        alt="Digital Marketing"
        title={t("services.digital.title")}
        subtitle={t("services.digital.name")}
        description={t("services.digital.description")}
        scrollRange={[40, -20]}
        prefersReducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}

const ScrollItem = ({
  href,
  className,
  image,
  alt,
  title,
  subtitle,
  description,
  scrollRange,
  prefersReducedMotion,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
      style={{ y: prefersReducedMotion ? 0 : y }}
    >
      <Item href={href} image={image} alt={alt} title={title} subtitle={subtitle} description={description} />
    </motion.div>
  );
};

const Item = ({ href, className, image, alt, title, subtitle, description }) => {
  return (
    <>
      <HoverCard as={Link} href={href} className={className}>
        <Image src={image} alt={alt} width={500} height={400} className="rounded-[20px] w-full h-auto" />
        <div className="bg-[url(/images/box-shape.png)] bg-no-repeat bg-size-[100%_100%] 2xl:px-10 px-5 pt-[66px] xl:pt-[84px] 2xl:h-[400px] -mt-[90px] 2xl:-mt-[114px] relative 2xl:pb-0 pb-10">
          <small className="text-parrot-1100 text-xl font-black text-center uppercase font-gotham absolute top-[3%] pl-[50%] right-0 w-full">
            {subtitle}
          </small>
          <h2 className="4xl:text-5xl 2xl:text-4xl text-3xl font-black text-white uppercase font-gotham pb-[9px]">
            {title}
          </h2>
          <p className="xl:text-base text-sm font-light leading-tight uppercase text-white">{description}</p>
        </div>
      </HoverCard>
    </>
  );
};
