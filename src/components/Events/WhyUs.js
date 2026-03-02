import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function WhyUs() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen text-white px-6 xl:px-14 font-gotham">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: "url('/images/shape6.svg')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-0 lg:px-6 py-16 relative z-10">
        {/* Big Text */}
        <h1 className="text-6xl lg:text-9xl xl:text-[250px] font-bold leading-none mb-4 text-parrot-1100">
          {t("Events.WhyUs.title")}
        </h1>

        {/* Sub Big Text */}
        <h2 className="text-2xl lg:text-4xl font-semibold mb-0 lg:mb-32 lg:pl-12 uppercase">
          {t("Events.WhyUs.subtitle")}
          <br />
          {t("Events.WhyUs.subtitle_part2")}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl leading-tight xl:ml-12 max-w-md">
          {t("Events.WhyUs.description_part1")}
          <br /> <br />
          {t("Events.WhyUs.description_part2")}
        </p>
      </div>

      {/* Overlay Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full xl:w-3/5 z-40">
        <Image src="/images/image64.png" alt="Creative overlay" width={1200} height={800} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
