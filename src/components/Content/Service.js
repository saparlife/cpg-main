import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Service() {
  const { t } = useI18n();

  return (
    <section className="relative xl:min-h-screen">
      <div className="max-w-[1640px] mx-auto w-full relative">
        <div className="grid grid-cols-10 xl:min-h-screen">
          {/* Left Block - 40% */}
          <div
            className="col-span-4 relative z-40 bg-parrot-1100 py-24 lg:py-16 xl:py-0 flex xl:items-center overflow-hidden"
            style={{
              backgroundImage: `url('/images/shape4.svg')`,
              backgroundSize: "cover",
            }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-parrot-1100/90"></div>

            {/* Content */}
            <div className="relative z-10 px-12 font-copilot">
              <h2 className="text-black-1300 text-[60px] leading-tight lg:text-[180px] xl:text-[300px]">
                {t("Content.Service.what")}
              </h2>
              <h2 className="text-black-1300 text-[40px] leading-tight lg:text-[150px] xl:text-[220px]">
                {t("Content.Service.we")}
              </h2>
            </div>
          </div>

          {/* Right Block - 60% */}
          <div className="col-span-6 bg-black-1300 flex items-center py-16 xl:py-0 px-2 lg:px-16 xl:px-32 relative">
            <div className="relative z-10">
              <h1 className="text-parrot-1100 uppercase font-gothamultra text-2xl lg:text-4xl xl:text-8xl leading-tight mb-2 lg:mb-8">
                {t("Content.Service.title")}
              </h1>

              <ul className="text-white/80 font-gothammedium text-[10px] lg:text-xl leading-relaxed max-w-4xl xl:px-12 pl-4 lg:pl-24 xl:space-y-2">
                {t("Content.Service.list").map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Overlay Image - extends under right column */}
        <div className="absolute top-none bottom-[-20px] md:bottom-none lg:top-1/2 left-[31.3%] lg:left-[27.5%] xl:left-[28.8%] z-50 -translate-y-1/2 pointer-events-none">
          <Image src="/images/hand-2.png" alt="Hand pointing" width={320} height={400} className="w-16 lg:w-64 xl:w-80 h-auto" />
        </div>
      </div>
    </section>
  );
}
