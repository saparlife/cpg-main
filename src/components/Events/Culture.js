import { useI18n } from "@/i18n/useI18n";

export default function Culture() {
  const { t } = useI18n();
  return (
    <section className="py-[60px] lg:py-[120px]">
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full">
        {/* 1. Image Section */}
        <div className="mb-[20px]">
          <img src="/images/cultural.svg" alt="Culture and Events" className="w-full h-full object-cover" />
        </div>

        {/* 2. Two Column Section 40/60 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[20px] items-center">
          {/* Left Column - 40% */}
          <div className="lg:col-span-2">
            <h3 className="text-6xl xl:text-8xl uppercase font-gotham text-white">{t("Events.Culture.title")}</h3>
          </div>

          {/* Right Column - 60% */}
          <div className="lg:col-span-3">
            <div className="text-center text-xs lg:text-xl xl:text-2xl rounded-xl bg-parrot-1100 h-full p-2 uppercase font-gotham">
              {t("Events.Culture.subtitle")}
            </div>
          </div>
        </div>

        {/* 3. Grid Section with Rounded Gray Background */}
        <div className="rounded-2xl p-[30px] md:p-[60px] bg-white/5 mt-4">
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {new Array(4).fill(0).map((_, index) => (
              <div key={index} className="flex justify-start flex-1">
                <div className="flex flex-1 flex-col xl:flex-row items-center lg:justify-start xl:justify-start gap-4">
                  <div className="w-12 lg:w-36 text-3xl xl:text-8xl text-center font-gotham text-parrot-1100 leading-none flex-shrink-0">
                    {t(`Events.Culture.point${index + 1}_number`)}
                  </div>
                  <h3 className="text-md xl:text-xl font-gotham text-center xl:text-left text-white uppercase">
                    {t(`Events.Culture.point${index + 1}_text`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
