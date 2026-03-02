import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client4() {
  const { t } = useI18n();
  return (
    <section className="py-16 font-gotham relative">
      {/* Absolute Overlay Image */}
      <Image
        src="/images/shape14.svg"
        alt="Overlay decoration"
        width={600}
        height={600}
        className="absolute z-40 top-[-20px] right-0 lg:right-none lg:top-[-100px] lg:left-[150px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] object-contain pointer-events-none"
      />

      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="mb-6 flex flex-col xl:flex-row gap-[40px] xl:justify-between xl:items-center">
          <h2 className="text-5xl lg:text-9xl text-white font-copilot uppercase">{t("Events.Client4.title")}</h2>
          <div className="mt-6 xl:mt-0 flex flex-row items-center justify-center gap-[20px]">
            <h3 className="text-4xl lg:text-7xl text-parrot-1100">{t("Events.Client4.count")}</h3>
            <p className="text-lg text-white font-gotham uppercase leading-tight">
              {t("Events.Client4.count_description")}
              <br />
              {t("Events.Client4.count_description_part2")}
            </p>
          </div>
        </div>
        {/* Main Content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Text Block - Position 1 */}
          <div className="flex flex-col justify-center items-center p-2 lg:p-6">
            <p className="text-parrot-1100 text-center text-lg lg:text-xl xl:text-2xl">
              {t("Events.Client4.description")}
              <br />
              {t("Events.Client4.description_part2")}
            </p>
          </div>

          {/* Image 2 */}
          <div className="relative group bg-gray-200 rounded-xl overflow-hidden min-h-[200px]">
            <Image
              src="/images/image54.png"
              alt="Educational content 1"
              fill
              className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="relative group bg-gray-200 rounded-xl overflow-hidden min-h-[200px]">
            <Image
              src="/images/image55.png"
              alt="Educational content 2"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="relative group bg-gray-200 rounded-xl overflow-hidden min-h-[200px]">
            <Image
              src="/images/image56.png"
              alt="Educational content 3"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="relative group bg-gray-200 rounded-xl overflow-hidden min-h-[200px]">
            <Image
              src="/images/image57.png"
              alt="Educational content 4"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="relative group bg-gray-200 rounded-xl overflow-hidden min-h-[200px]">
            <Image
              src="/images/image58.png"
              alt="Educational content 5"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
