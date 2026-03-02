import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Projects() {
  const { t } = useI18n();
  return (
    <section className="py-4 lg:py-16 font-gotham relative mt-12">
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center xl:absolute z-40 xl:top-[-100px] space-x-12">
          <h2 className="text-5xl lg:text-[80px] xl:text-9xl text-parrot-1100 font-gothamultra uppercase">
            {t("Events.Projects.title_part1")}
          </h2>
          <div>
            <h3 className="text-xl lg:text-2xl xl:text-4xl text-white font-gothamultra uppercase">
              {t("Events.Projects.title_part2")}
            </h3>
            <h3 className="text-2xl lg:text-7xl xl:text-8xl text-parrot-1100 font-gothamultra uppercase">
              {t("Events.Projects.title_part3")}
            </h3>
          </div>
        </div>
        {/* Main Content */}
        <div className="space-y-6 mt-4 lg:mt-8">
          {/* First Row - 3 columns */}
          <div className="grid grid-cols-3 gap-6">
            {/* Image 2 */}
            <div className="group bg-gray-200 rounded-xl overflow-hidden">
              <Image
                width={600}
                height={400}
                src="/images/image35.png"
                alt="Educational content 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Image 3 */}
            <div className="group bg-gray-200 rounded-xl overflow-hidden">
              <Image
                width={600}
                height={400}
                src="/images/image36.png"
                alt="Educational content 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110  "
              />
            </div>

            {/* Image 4 */}
            <div className="group bg-gray-200 rounded-xl overflow-hidden">
              <Image
                width={600}
                height={400}
                src="/images/image37.png"
                alt="Educational content 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Second Row - Custom grid with 60% for images and 40% for text */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Images Container - 50% width */}
            <div className="w-full lg:w-[50%] grid grid-cols-2 gap-6">
              {/* Image 5 */}
              <div className="group bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src="/images/image38.png"
                  alt="Educational content 4"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Image 6 */}
              <div className="group bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src="/images/image39.png"
                  alt="Educational content 5"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Text Block - 50% width */}
            <div className="w-full lg:w-[50%] flex flex-col bg-parrot-1100 rounded-xl justify-center items-center p-6">
              <h3 className="text-black-1100 text-xl lg:text-2xl xl:text-4xl uppercase">
                {t("Events.Projects.description")}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
