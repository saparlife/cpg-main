import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Newyear() {
  const { t } = useI18n();
  return (
    <section className="relative xl:min-h-screen flex items-center overflow-hidden my-6">
      {/* Absolute Overlay Image - Positioned to the right to avoid text overlap */}
      <div className="hidden xl:block absolute top-0 bottom-0 lg:left-[25%] z-40">
        <Image
          src="/images/image40.png"
          alt="Creative Advertisement"
          width={800}
          height={400}
          className="object-cover w-auto h-full relative xl:left-[20%] 2xl:left-0"
          priority
        />
      </div>

      {/* Two Column Layout */}
      <div className="w-full flex relative z-10">
        {/* Left Column - 60% - Content with bg-parrot-1100 */}
        <div
          className="w-full lg:w-3/5 bg-parrot-1100 flex py-5 lg:py-24 px-8 lg:px-16 xl:px-24 xl:min-h-screen"
          style={{
            backgroundImage: "url(/images/shape5.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <div className="block xl:hidden opacity-20 lg:opacity-100 absolute top-0 bottom-0 left-0 lg:left-[25%] right-0 z-10">
            <Image
              src="/images/image40.png"
              alt="Creative Advertisement"
              width={800}
              height={400}
              className="object-fill w-auto h-full relative lg:left-[20%] xl:left-0"
            />
          </div>
          <div className="w-full h-full flex flex-col max-w-md z-30">
            <h2 className="text-2xl lg:text-4xl xl:text-7xl uppercase font-gothamultra text-black-1300 mb-2">
              {t("Events.Newyear.title")}
            </h2>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex items-center flex-1 mb-4">
                <p className="text-xl lg:text-2xl xl:text-4xl text-black-1300 font-gotham">
                  {t("Events.Newyear.guests")}
                  <br />
                  {t("Events.Newyear.zones")}
                  <br />
                  {t("Events.Newyear.headliners")}
                </p>
              </div>
              <p className="text-sm lg:text-lg xl:text-xl text-black-1300 font-gotham">
                {t("Events.Newyear.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 40% - Transparent to show background image */}
        <div className="hidden xl:block w-2/5 min-h-screen">
          {/* This column is now transparent to show the background image */}
        </div>
      </div>
    </section>
  );
}
