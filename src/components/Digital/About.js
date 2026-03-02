import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function About() {
  const { t } = useI18n();

  return (
    <section className="relative w-full xl:min-h-screen">
      {/* Background Shape */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/shape6.svg" alt="" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center xl:min-h-[80vh]">
          {/* Left Column - Circle with Text */}
          <div className="flex justify-end items-center">
            <div
              className="w-80 h-80 xl:w-120 xl:h-120 space-y-2 leading-tight rounded-full flex font-gothamultra uppercase items-center justify-center text-black-1100 text-center p-2 xl:p-8 flex-col"
              style={{ backgroundColor: "var(--color-parrot-1100)" }}
            >
              <h3 className="text-4xl xl:text-8xl">{t("Digital.About.title_main")}</h3>
              <p className="text-2xl xl:text-5xl">{t("Digital.About.title_secondary")}</p>
            </div>
          </div>

          {/* Right Column - Big Text and Short Text */}
          <div className="xl:w-120 items-center justify-center flex flex-col gap-6">
            <div className="leading-tight font-gothamultra uppercase space-y-2">
              <h2 className="text-6xl text-parrot-1100">{t("Digital.About.title_tertiary")}</h2>
              <h2 className="text-7xl text-parrot-1100">{t("Digital.About.title_quaternary")}</h2>
              <p className="text-lg text-white max-w-md">{t("Digital.About.tagline")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
