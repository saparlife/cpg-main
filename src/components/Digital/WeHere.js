import { useI18n } from "@/i18n/useI18n";

export default function WeHere() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto lg:px-20 py-6 lg:py-24 my-24 relative">
      <div className="grid grid-cols-10 gap-4 items-stretch">
        {/* LLeft Column - 30% (now empty space for absolute image) */}
        <div className="col-span-3 lg:col-span-4 flex">
          <div className="flex-1"></div>
        </div>
        {/* Right Column - 70% */}
        <div className="col-span-7 lg:col-span-6 flex flex-col flex-1">
          <div className="relative pr-10 lg:p-10 flex-grow ">
            <div className="ml-8">
              <p className="text-lg lg:text-2xl lg:ml-[-70px] font-gotham uppercase text-white">
                {t("Digital.WeHere.title_part1")}
              </p>
              <h3 className="text-3xl lg:text-8xl lg:ml-[-70px]  text-parrot-1100 font-gothamultra uppercase">
                {t("Digital.WeHere.title_part2")}
              </h3>
              <p className="text-white text-xs lg:text-2xl mb-4 font-gotham">
                {t("Digital.WeHere.crisis_description")}
                <br />
                <br />
                {t("Digital.WeHere.crisis_question")}
                <br />
                <br />
                {t("Digital.WeHere.crisis_answer")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/shape6.svg"
        alt="Advantages illustration"
        className="absolute w-full top-0 left-0 h-full object-contain z-40 opacity-20"
      />
      {/* Absolute positioned image that overlays left boxes */}
      <img
        src="/images/image69.png"
        alt="Advantages illustration"
        className="absolute top-8 lg:left-20 left-10 w-[100px] lg:w-2/5 h-[calc(100%_-_4rem)] object-contain rounded-lg z-50"
      />
    </div>
  );
}
