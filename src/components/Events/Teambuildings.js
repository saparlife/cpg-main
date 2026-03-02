import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Teambuildings() {
  const { t } = useI18n();
  return (
    <section className="py-16 font-gotham relative">
      {/* Absolute Overlay Image */}
      <Image
        src="/images/shape9.svg"
        alt="Overlay decoration"
        width={600}
        height={600}
        className="absolute z-40 top-0 left-1/2 -translate-x-1/2 lg:top-[-120px] xl:top-[-100px] lg:left-[40%] lg:translate-x-0 w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] object-contain pointer-events-none"
      />

      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="mb-12 lg:mb-6">
          <h2 className="text-4xl lg:text-6xl xl:text-8xl text-white font-gotham">{t("Events.Teambuildings.title")}</h2>
        </div>

        {/* Main Content - 30/70 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 font-gotham">
          {/* Left Column - Text (30% - 3/10) */}
          <div className="lg:col-span-3">
            <div className="space-y-6 bg-parrot-1100 p-8 rounded-lg h-full">
              <h4 className="text-lg lg:text-2xl xl:text-4xl uppercase text-black-1100 font-gothamultra">
                {t("Events.Teambuildings.subtitle")}
                <br />
                {t("Events.Teambuildings.subtitle_part2")}
              </h4>
              <ul className="space-y-4 text-black-1100 text-xs xl:text-md">
                {new Array(4).fill(null).map((_, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 xl:w-3 xl:h-3 bg-black-1100 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{t(`Events.Teambuildings.bullet${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Column - Image Grid (70% - 7/10) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {/* Row 1 */}
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-23.png"
                  alt="Teambuilding activity 1"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-24.png"
                  alt="Teambuilding activity 2"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-25.png"
                  alt="Teambuilding activity 3"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              {/* Row 2 */}
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-26.png"
                  alt="Corporate event 1"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-27.png"
                  alt="Corporate event 2"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={250}
                  src="/images/image-28.png"
                  alt="Corporate event 3"
                  className="w-full h-[200px] lg:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
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
