import { useI18n } from "@/i18n/useI18n";

export default function Education() {
  const { t } = useI18n();
  return (
    <section className="py-16 font-gotham relative">
      {/* Absolute Overlay Image */}
      <img
        src="/images/shape10.svg"
        alt="Overlay decoration"
        className="absolute z-40 top-[40px] left-1/2 -translate-x-1/2 xl:top-[-20px] xl:left-[250px] w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] object-contain pointer-events-none"
      />

      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="mb-6 flex flex-col xl:flex-row gap-[40px] justify-between items-center">
          <h2 className="text-3xl lg:text-7xl text-white font-gothamultra uppercase">{t("Events.Education.title")}</h2>
          <p className="text-md lg:mt-6 lg:text-2xl text-white font-gotham uppercase">
            {t("Events.Education.subtitle")}
            <br /> {t("Events.Education.subtitle_part2")}
          </p>
        </div>
        {/* Main Content - 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 mt-8">
          {/* Text Block - Position 1 */}
          <div className="flex flex-col justify-end items-center p-6">
            <ul className="text-parrot-1100 space-y-2 text-xl lg:text-4xl">
              <li>
                <span className="mr-4">•</span>
                <span>{t("Events.Education.item1")}</span>
              </li>
              <li>
                <span className="mr-4">•</span>
                <span>{t("Events.Education.item2")}</span>
              </li>
              <li>
                <span className="mr-4">•</span>
                <span>{t("Events.Education.item3")}</span>
              </li>
            </ul>
          </div>

          {/* Image 2 */}
          <div className="group bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/image29.png"
              alt="Educational content 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="group bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/image30.png"
              alt="Educational content 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110  "
            />
          </div>

          {/* Image 4 */}
          <div className="group bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/image31.png"
              alt="Educational content 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="group bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/image32.png"
              alt="Educational content 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="group bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="/images/image33.png"
              alt="Educational content 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
