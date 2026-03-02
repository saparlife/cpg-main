"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/Motion/AnimatedSection";
import { logoStagger, logoItem, logoHover, reducedMotion, viewportConfig } from "@/lib/animations";

const clients = [
  "/images/clients/client-7.svg",
  "/images/clients/client-8.svg",
  "/images/clients/client-9.svg",
  "/images/clients/client-10.svg",
  "/images/clients/client-11.svg",
  "/images/clients/client-12.svg",
  "/images/clients/client-13.svg",
  "/images/clients/client-14.svg",
  "/images/clients/client-15.svg",
  "/images/clients/client-6.svg",
  "/images/clients/client-17.svg",
  "/images/clients/client-18.svg",
  "/images/clients/client-19.svg",
  "/images/clients/client-20.svg",
  "/images/clients/client-21.svg",
  "/images/clients/client-2.svg",
  "/images/clients/client-4.svg",
  "/images/clients/client-22.svg",
  "/images/clients/client-3.svg",
  "/images/clients/client-23.svg",
  "/images/clients/client-24.svg",
  "/images/clients/client-1.svg",
  "/images/clients/client-combined.svg",
];

export default function OurClients() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection className="my-[20px] lg:my-[100px] lg:px-[60px] lg:pb-20" as="div">
      <h3 className="font-gotham text-xl sm:text-4xl lg:text-5xl uppercase mb-2 lg:mb-10 text-parrot-1100">
        {t("Main.Clients.title")}
      </h3>
      <div className="bg-white rounded-lg p-6 py-10 bg-center bg-no-repeat bg-contain opacity-95">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={prefersReducedMotion ? reducedMotion : logoStagger}
        >
          {clients.slice(0, -1).map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4"
              variants={prefersReducedMotion ? reducedMotion : logoItem}
              whileHover={prefersReducedMotion ? {} : logoHover}
            >
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                width={120}
                height={40}
                className="max-h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
          {/* Last element spanning 2 columns */}
          <motion.div
            className="col-span-2 flex justify-center items-center p-4"
            variants={prefersReducedMotion ? reducedMotion : logoItem}
            whileHover={prefersReducedMotion ? {} : logoHover}
          >
            <Image
              src={clients[clients.length - 1]}
              alt={`Client ${clients.length}`}
              width={240}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
