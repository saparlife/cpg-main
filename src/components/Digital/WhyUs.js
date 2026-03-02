import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function WhyUs() {
  const { t } = useI18n();

  return (
    <div className="relative xl:min-h-screen text-white px-6 lg:px-14 font-gotham">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: "url('/images/shape6.svg')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-6 py-16 relative z-30 space-y-4">
        <div>
          {/* Big Text */}
          <h1 className="text-6xl lg:text-9xl font-bold leading-none text-parrot-1100">{t("Digital.WhyUs.title")}</h1>

          {/* Sub Big Text */}
          <h2 className="text-4xl lg:text-7xl font-semibold mb-8 uppercase">{t("Digital.WhyUs.subtitle")}</h2>
        </div>
        <div className="max-w-lg space-y-4">
          <div className="border-parrot-1100 border-[5px] rounded-4xl flex flex-col items-center justify-center py-8 px-4">
            <h3 className="uppercase text-parrot-1100 text-center font-gothamultra font-bold text-3xl lg:text-5xl">
              {t("Digital.WhyUs.metric1_value")}
            </h3>
            <p className="text-md lg:text-lg leading-tight max-w-md text-white text-center">
              {t("Digital.WhyUs.metric1_label")}
            </p>
          </div>
          <div className="border-parrot-1100 border-[5px] rounded-4xl flex flex-col items-center justify-center py-8 px-4">
            <h3 className="uppercase text-parrot-1100 text-center font-gothamultra text-3xl lg:text-5xl">
              {t("Digital.WhyUs.metric2_value")}
            </h3>
            <p className="text-md lg:text-lg leading-tight max-w-md text-white text-center">
              {t("Digital.WhyUs.metric2_label")}
            </p>
          </div>
          <div className="bg-parrot-1100 text-black-1100 px-8 py-8 rounded-4xl flex flex-col space-y-4">
            <h3 className="text-xl lg:text-3xl leading-tight">{t("Digital.WhyUs.romi_title")}</h3>
            <p className="text-sm lg:text-lg leading-tight whitespace-pre-line">
              {t("Digital.WhyUs.romi_description")}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl leading-tight whitespace-pre-line">
            {t("Digital.WhyUs.tagline")}
          </p>
        </div>
      </div>

      {/* Overlay Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-3/5 z-20">
        <Image src="/images/image74.png" alt="Creative overlay" width={1200} height={800} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
