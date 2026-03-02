import { useI18n } from "@/i18n/useI18n";

export default function Features() {
  const { t } = useI18n();

  const features = t("Events.Features.items");

  return (
    <section className="pt-16 font-gotham relative">
      {/* Absolute Overlay Image */}
      <img
        src="/images/hand-3.png"
        alt="Overlay decoration"
        className="absolute top-[116px] right-[20px] lg:top-auto lg:bottom-0 lg:left-[37%] xl:left-[30%] z-40 w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-contain pointer-events-none"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 relative z-10">
        {/* Left Column - 60% (3/5) */}
        <div className="lg:col-span-3 font-gotham uppercase px-24 flex flex-col">
          <h2 className="text-4xl lg:text-7xl xl:text-8xl text-white">{t("Events.Features.title_what")}</h2>
          <h2 className="text-2xl lg:text-8xl xl:text-9xl text-parrot-1100">{t("Events.Features.title_can")}</h2>
          <div className="h-full flex items-center">
            <p className="text-xs lg:text-4xl text-parrot-1100">
              {t("Events.Features.description_part1")}
              <br />
              {t("Events.Features.description_part2")}
            </p>
          </div>
        </div>

        {/* Right Column - 40% (2/5) */}
        <div
          className="lg:col-span-2 bg-parrot-1100 px-12 py-12 lg:py-24 relative"
          style={{
            backgroundImage: "url(/images/shape7.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <ul className="space-y-4 xl:space-y-8 relative z-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 justify-start">
                <span className="text-2xl xl:text-4xl font-gothamultra text-black min-w-[3rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm uppercase xl:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
