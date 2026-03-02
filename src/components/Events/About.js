import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section>
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full">
        {/* Row 1 - Full Width */}
        <div className="mb-[40px] lg:mb-[60px]">
          <div className="relative rounded-xl overflow-hidden h-[150px] lg:h-[350px]">
            <Image src="/images/image-15.png" alt="Event showcase" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="text-white px-10 lg:px-24 uppercase font-gotham text-xl lg:text-5xl">
                <h2>{t("Events.About.title_part1")} </h2>
                <h2 className="text-parrot-1100">
                  {t("Events.About.title_part2")}
                  <br />
                  {t("Events.About.title_part3")}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - 60/40 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[20px] lg:gap-[30px]">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3">
            <div className="relative rounded-xl overflow-hidden h-[150px] lg:h-[350px]">
              <Image src="/images/image-16.png" alt="Corporate events" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="text-white px-10 lg:px-24 uppercase font-gotham text-xl lg:text-5xl">
                  <h3 className="font-gotham text-parrot-1100">{t("Events.About.years")}</h3>
                  <h3 className="font-gotham">
                    {t("Events.About.years_description")}
                    <br />
                    {t("Events.About.years_description_part2")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden h-[300px] lg:h-[350px]">
              <Image src="/images/image-17.png" alt="Special occasions" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-6">
                <div className="text-parrot-1100 uppercase px-6">
                  <p className="text-xl lg:text-2xl font-gotham max-w-sm">{t("Events.About.events_description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
