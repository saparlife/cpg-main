import { useI18n } from "@/i18n/useI18n";

export default function Smm() {
  const { t } = useI18n();

  return (
    <div className="py-8 px-6 xl:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-8">
        {/* Left Column - Two rows blocks */}
        <div className="flex flex-col gap-8 flex-grow relative">
          <div className="rounded-2xl p-6 min-h-32 border-parrot-1100 border-[5px]">
            <h3 className="font-bold font-gothamultra text-8xl text-center text-parrot-1100">
              {t("Digital.Smm.title")}
            </h3>
          </div>
          <div className="bg-parrot-1100 relative leading-tight z-30 font-gotham rounded-2xl p-4 xl:p-16 flex flex-col flex-1 justify-center min-h-32 border-parrot-1100 border-[5px]">
            <img src="/images/shape4.svg" alt="Decorative Shape" className="absolute z-10 top-0 opacity-5" />
            <div className="relative z-20">
              <div className="bg-black-1100 text-parrot-1100 rounded-2xl p-4 text-xl lg:text-2xl">
                {t("Digital.Smm.description")}
              </div>
              <ul className="list-disc list-inside mt-4  text-lg space-y-2">
                {t("Digital.Smm.list").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-4xl hidden lg:block bg-black-1100 absolute w-4 h-4 xl:w-8 xl:h-8 right-4 top-4 xl:right-6 xl:top-6" />
          </div>
        </div>

        {/* Right Column - Two rows (1st: two columns 40/60, 2nd: text) */}
        <div className="flex flex-col gap-8 flex-grow">
          <div className="grid grid-cols-[40fr_60fr] gap-6">
            <div className="rounded-2xl min-h-32 border-parrot-1100 border-[5px] overflow-hidden">
              <img src="/images/image67.png" alt="SMM Visual" className="w-full h-auto scale-105" />
            </div>
            <div className="rounded-2xl min-h-32 border-parrot-1100 border-[5px] overflow-hidden">
              <img src="/images/image68.png" alt="SMM Visual" className="w-full h-auto scale-105" />
            </div>
          </div>
          <div className="rounded-2xl p-6 border-parrot-1100 border-[5px]">
            <p className="text-white font-gotham text-xl lg:text-2xl">
              {t("Digital.Smm.tagline")}
              <br />
              {t("Digital.Smm.tagline_alt")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
