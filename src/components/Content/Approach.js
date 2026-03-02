"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Approach() {
  const { t } = useI18n();

  return (
    <section className="relative xl:min-h-screen flex items-center justify-center py-20">
      {/* Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/shape6.svg" alt="Background Shape" width={1024} height={1024} className="w-full h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xs lg:max-w-4xl px-5 mx-auto">
        <h1 className="text-parrot-1100 xl:ml-[-100px] font-gotham font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase">
          {t("Content.Approach.title")}
        </h1>
        <h1 className="text-parrot-1100 text-right xl:ml-[100px] w-full font-gotham font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase">
          {t("Content.Approach.subtitle")}
        </h1>

        <p className="text-white font-gotham text-2xl xl:text-lg max-w-md mx-auto mt-12">
          {t("Content.Approach.description_1")}
          <br />
          {t("Content.Approach.description_2")}
          <br />
          {t("Content.Approach.description_3")}
        </p>
      </div>
    </section>
  );
}
