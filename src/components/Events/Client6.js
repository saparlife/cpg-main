import { useI18n } from "@/i18n/useI18n";

export default function Client6() {
  const { t } = useI18n();
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1640px] px-[20px] md:px-[40px] mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {/* Left column - 30% width */}
          <div className="w-full lg:w-[25%] bg-parrot-1100 rounded-xl p-8 flex flex-col items-center relative overflow-hidden">
            {/* Background image */}

            <img
              src="/images/shape7.svg"
              alt="Background decoration"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Content */}
            <div className="relative z-10 py-6 justify-center items-center flex flex-col">
              <img src="/images/shape15.svg" alt="EU Logo" className="w-32 lg:w-64 h-auto" />
              <div className="text-xl xl:text-2xl leading-tight font-bold font-gotham text-black-500 uppercase text-center">
                <h3 className="pr-12">{t("Events.Client6.title")}</h3>
                <h3 className="pl-12">{t("Events.Client6.title_part2")}</h3>
              </div>
              <div className="text-center mt-4 lg:mt-12 space-y-6 lg:space-y-12 flex flex-col items-center justify-center">
                <p className="text-sm xl:text-lg font-gotham">
                  {t("Events.Client6.description")}
                  <br />
                  <br />
                  {t("Events.Client6.description_part2")}
                  <br />
                  <br />
                  {t("Events.Client6.description_part3")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - 70% width */}
          <div className="w-full lg:w-[75%] rounded-xl overflow-hidden">
            <img
              src="/images/image62.png"
              alt="Corporate Souvenirs"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
