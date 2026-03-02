import { useI18n } from "@/i18n/useI18n";

export default function WhyUs() {
  const { t } = useI18n();

  return (
    <div className="relative xl:min-h-screen text-white px-6 xl:px-14 font-gotham">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: "url('/images/shape6.svg')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto xl:px-6 py-16 relative z-10">
        {/* Big Text */}
        <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold leading-none mb-4 text-parrot-1100">
          {t("Content.WhyUs.title")}
        </h1>

        {/* Sub Big Text */}
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase">{t("Content.WhyUs.subtitle")}</h2>

        {/* Description */}
        <p className="text-[10px] md:text-xl lg:text-2xl max-w-2xl leading-relaxed xl:ml-12">
          {t("Content.WhyUs.description_1")} <br />
          {t("Content.WhyUs.description_2")}
          <br /> {t("Content.WhyUs.description_3")}.
          <br />
          {t("Content.WhyUs.description_4")}
          <br />
          <br />
          {t("Content.WhyUs.company")}
        </p>
      </div>

      {/* Overlay Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-2/3">
        <img src="/images/image-14.png" alt="Creative overlay" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
