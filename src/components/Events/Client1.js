import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client1() {
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-16 font-gotham relative mt-16">
      {/* Absolute Overlay Image */}
      <Image
        src="/images/shape12.svg"
        alt="Overlay decoration"
        width={700}
        height={700}
        className="absolute z-40 -top-[30px] left-1/2 transform -translate-x-1/2 w-[300px] h-auto lg:translate-0 lg:top-[-30px] lg:left-[50px] lg:w-[400px] lg:h-[400px] xl:translate-0 xl:top-[-100px] xl:left-[50px] xl:w-[700px] xl:h-[700px] object-contain pointer-events-none"
      />

      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="flex justify-between">
          <div className="flex-2 hidden lg:block"></div>
          <div className="mb-6 flex-1">
            <h2 className="text-7xl text-center lg:text-left lg:text-8xl xl:text-9xl text-white font-gotham uppercase">
              {t("Events.Client1.title")}
            </h2>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-[40px]">
              <h2 className="text-4xl text-center lg:text-left lg:text-8xl xl:text-9xl text-stroke-parrot text-transparent font-gotham">
                {t("Events.Client1.year")}
              </h2>
              <h2 className="hidden lg:block text-2xl text-parrot-1100 font-gotham uppercase">
                {t("Events.Client1.subtitle")}
                <br />
                {t("Events.Client1.subtitle_part2")}
                <br />
                {t("Events.Client1.subtitle_part3")}
              </h2>

              <h2 className="block lg:hidden text-[26px] text-parrot-1100 font-gotham uppercase text-center">
                {t("Events.Client1.subtitle")} {t("Events.Client1.subtitle_part2")} {t("Events.Client1.subtitle_part3")}
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
              <h4 className="text-md leading-tight xl:text-2xl text-center uppercase text-black-1100 font-gothamultra relative z-20">
                {t("Events.Client1.description")}
                <br />
                <br />
                {t("Events.Client1.description_part2")}
                <br />
                <br />
                {t("Events.Client1.description_part3")}
              </h4>
            </div>
          </div>
          {/* Right Column - Image Grid (70% - 7/10) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {/* Row 1 */}
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image41.png"
                  alt="Teambuilding activity 1"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image42.png"
                  alt="Teambuilding activity 2"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image43.png"
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
                  src="/images/image44.png"
                  alt="Corporate event 1"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image45.png"
                  alt="Corporate event 2"
                  width={600}
                  height={400}
                  className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/image46.png"
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
