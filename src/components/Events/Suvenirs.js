import { useI18n } from "@/i18n/useI18n";

export default function Suvenirs() {
  const { t } = useI18n();
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1640px] px-[20px] xl:px-[40px] mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {/* Left column - 30% width */}
          <div className="w-full lg:w-[25%] bg-black-500 rounded-xl p-8 flex flex-col items-center text-white relative overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/shape11.png')",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-4 font-gotham text-parrot-1100 uppercase">
                {t("Events.Suvenirs.title")}
              </h3>
              <div className="text-center mt-2 lg:mt-6 xl:mt-12 space-y-2 lg:space-y-6 xl:space-y-12 flex flex-col items-center justify-center">
                <p className="text-sm lg:text-lg xl:text-xl font-gotham">{t("Events.Suvenirs.text1")}</p>
                <div className="border-b border-white flex w-full"></div>
                <p className="text-sm lg:text-lg xl:text-xl font-gotham mt-4">{t("Events.Suvenirs.text2")}</p>
              </div>
            </div>
          </div>

          {/* Right column - 70% width */}
          <div className="w-full lg:w-[75%] rounded-xl overflow-hidden">
            <img
              src="/images/image34.png"
              alt="Corporate Souvenirs"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
