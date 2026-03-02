import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-20 pb-16 mb-48 lg:mb-140 xl:mb-72">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Main Heading */}
            <h1 className="font-gothamultra text-parrot-1100 text-4xl lg:text-9xl xl:text-9xl leading-none">
              {t("Content.About.title_main")}{" "}
              <span className="bg-parrot-1100 text-black px-6 py-2 rounded-full inline-block">
                {t("Content.About.title_main_action")}
              </span>
            </h1>
            <h1 className="font-gothamultra text-parrot-1100 text-6xl lg:text-9xl xl:text-9xl leading-none">
              {t("Content.About.title_main_noun")}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white lg:text-6xl xl:text-4xl font-gothammedium">{t("Content.About.tagline")}</p>

            {/* Pointing Hand */}
            <div className="absolute lg:right-[-150px] xl:top-[100px] xl:right-[-70px]">
              <Image src="/images/hand.png" alt="Pointing hand" width={800} height={800} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 lg:px-12 pb-16 xl:mt-[350px] relative z-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 h-[600px]">
            {/* Left Column - 70% */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* First Row - Full Width Block */}
              <div
                className="rounded-lg p-8 flex-1"
                style={{
                  background: "url(/images/image-1.png) no-repeat center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full flex justify-center flex-col text-white text-lg px-0 lg:px-[50px] xl:px-[100px]">
                  <h3 className="font-gotham text-4xl xl:text-8xl uppercase text-parrot-1100">
                    {t("Content.About.who_title")}
                  </h3>
                  <p className="lg:text-2xl xl:text-xl leading-relaxed font-gotham">
                    {t("Content.About.who_description")}
                  </p>
                </div>
              </div>

              {/* Second Row - Two Blocks */}
              <div className="flex gap-6 flex-1">
                {/* Stretch Block */}
                <div
                  className="bg-gray-700 rounded-lg p-6 flex-1"
                  style={{
                    background: "url(/images/image-2.png) no-repeat center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="px-0 lg:px-6 xl:px-26 h-full flex flex-col items-center justify-center text-white text-xs lg:text-xl xl:text-2xl font-gotham text-center">
                    <p>{t("Content.About.ideas")}</p>
                    <div className="flex items-center justify-center mt-6">
                      <Image src="/images/line-1.svg" alt="Decorative Element" width={300} height={50} />
                    </div>
                  </div>
                </div>

                {/* Square Block */}
                <div
                  className="bg-gray-600 rounded-lg p-6 aspect-square"
                  style={{
                    background: "url(/images/image-3.png) no-repeat center center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Column - 30% */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Block 4 */}
              <div className="border-[5px] border-parrot-1100 rounded-lg p-2 lg:p-6 flex-1">
                <div className="h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-5xl text-parrot-1100 font-gotham">
                  {t("Content.About.meaning")}
                </div>
              </div>

              {/* Block 5 */}
              <div className="rounded-lg p-6 flex-1 bg-parrot-1100 text-black-1100">
                <div className="h-full flex items-center justify-center text-xl lg:text-2xl font-gotham">
                  {t("Content.About.beauty")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
