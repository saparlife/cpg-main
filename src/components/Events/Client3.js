import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client3() {
  const { t } = useI18n();
  return (
    <section className="py-16 font-gotham relative lg:mt-16">
      {/* Absolute Overlay Image */}
      <Image
        src="/images/shape13.svg"
        alt="Overlay decoration"
        width={700}
        height={700}
        className="absolute z-40 right-[20px] top-[20px] w-[150px] h-[150px] lg:top-[-20px] lg:right-[50px] lg:w-[350px] lg:h-[350px] xl:top-[-120px] xl:right-[50px] xl:w-[700px] xl:h-[700px] object-contain pointer-events-none"
      />

      <div className="max-w-[1640px] px-[20px] md:px-[60px] lg:mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="flex">
          <div className="mb-6 flex-1">
            <h2 className="text-6xl lg:text-[200px] lg:leading-[200px] text-parrot-1100 font-gotham uppercase">
              {t("Events.Client3.title")}
            </h2>
            <div className="flex flex-row justify-between xl:justify-start xl:gap-[10px]">
              <h2 className="text-xl lg:text-5xl xl:text-4xl text-parrot-1100 font-gotham uppercase">
                {t("Events.Client3.subtitle")}
              </h2>
              <h2 className="text-xl lg:text-5xl xl:text-4xl text-white font-gotham uppercase">
                {t("Events.Client3.subtitle_part2")}
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content - 30/70 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 font-gotham">
          {/* Left Column - Text (30% - 3/10) */}
          <div className="lg:col-span-3">
            <div className="space-y-6 bg-parrot-1100 p-8 rounded-lg h-full flex items-center relative overflow-hidden">
              {/* Background Image - positioned over bg but under text */}
              <Image
                src="/images/shape7.svg"
                alt="Background decoration"
                fill
                className="object-cover z-10"
              />
              <div className="lg:mt-12 space-y-4 flex flex-col font-gotham">
                <p className="text-lg xl:text-2xl uppercase">{t("Events.Client3.description")}</p>
                <ul className="text-left space-y-2 text-lg xl:text-xl">
                  <li>• {t("Events.Client3.item1")}</li>
                  <li>• {t("Events.Client3.item2")}</li>
                  <li>• {t("Events.Client3.item3")}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column - Image Grid (70% - 7/10) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {/* Row 1 */}
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image48.png"
                  alt="Teambuilding activity 1"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image49.png"
                  alt="Teambuilding activity 2"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image50.png"
                  alt="Teambuilding activity 3"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              {/* Row 2 */}
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image51.png"
                  alt="Corporate event 1"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image52.png"
                  alt="Corporate event 2"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image53.png"
                  alt="Corporate event 3"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
