import { useI18n } from "@/i18n/useI18n";

export default function Advantages() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-6 xl:px-20 py-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 items-stretch">
        {/* Left Column - 70% */}
        <div className="col-span-6 flex flex-col flex-1">
          <div className="relative p-10 rounded-2xl mb-6 border-parrot-1100 border-[5px] flex-grow ">
            <img src="/images/star1.png" alt="Advantages Icon" className="absolute right-12 top-12 w-12 h-12 z-40" />
            <h3 className="text-2xl xl:text-4xl font-semibold mb-3 text-parrot-1100 font-gothamultra uppercase">
              {t("Digital.Advantages.title")}
              <br />
              {t("Digital.Advantages.subtitle")}
            </h3>
            <p className="text-white text-xs xl:text-xl mb-4 font-gotham">{t("Digital.Advantages.intro")}</p>
            <ul className="text-white text-xs xl:text-xl list-disc list-inside space-y-2 font-gotham">
              {t("Digital.Advantages.list").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Block 2 */}
          <div className="flex flex-row">
            <div className="bg-parrot-1100 p-6 rounded-xl">
              <p className="text-black-1100 text-xs lg:text-md xl:text-2xl font-gotham">
                {t("Digital.Advantages.analytics")}
              </p>
            </div>
            <img
              src="/images/image66.png"
              alt="Advantages illustration"
              className="block lg:hidden object-contain rounded-lg z-10 w-48"
            />
          </div>
        </div>

        {/* Right Column - 30% (now empty space for absolute image) */}
        <div className="col-span-4 flex">
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Absolute positioned image that overlays left boxes */}
      <img
        src="/images/image66.png"
        alt="Advantages illustration"
        className="hidden lg:block absolute top-8 right-6 xl:right-20 w-2/5 h-[calc(100%_-_4rem)] object-contain rounded-lg z-10"
      />
    </div>
  );
}
