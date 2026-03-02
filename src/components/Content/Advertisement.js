import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Advertisement() {
  const { t } = useI18n();

  return (
    <section className="relative xl:min-h-screen flex items-center overflow-hidden">
      {/* Absolute Overlay Image - Positioned to the right to avoid text overlap */}
      <div className="absolute top-0 bottom-0 left-0 xl:left-[20%] right-0 z-10 xl:z-40 rounded-lg overflow-hidden">
        <Image src="/images/image-5.png" alt="Creative Advertisement" fill className="object-cover" priority />
      </div>

      {/* Two Column Layout */}
      <div className="w-full flex relative z-20 xl:z-10">
        {/* Left Column - 60% - Content with bg-parrot-1100 */}
        <div
          className="w-full xl:w-3/5 xl:bg-parrot-1100 flex xl:py-24 xl:px-24 xl:min-h-screen"
          style={{
            backgroundImage: "url(/images/shape5.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <div className="max-w-md bg-parrot-1100/80 p-12 xl:p-0">
            <h2 className="text-4xl xl:text-7xl uppercase font-gothamultra text-black-1300 mb-6">
              {t("Content.Advertisement.title")}
            </h2>
            <div className="flex flex-col space-y-6 max-w-sm">
              {new Array(3).fill(0).map((_, index) => (
                <p key={index} className="text-sm lg:text-xl xl:text-lg text-black-1300 font-gotham leading-relaxed">
                  {t(`Content.Advertisement.description_${index + 1}`)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 40% - Transparent to show background image */}
        <div className="w-full xl:w-2/5 xl:min-h-screen">
          {/* This column is now transparent to show the background image */}
        </div>
      </div>
    </section>
  );
}
