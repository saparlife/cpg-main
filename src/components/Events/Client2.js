import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client2() {
  const { t } = useI18n();
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1640px] px-[20px] md:px-[40px] mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row  gap-6 lg:h-[600px]">
          {/* Left column - 30% width */}
          <div className="w-full lg:w-[30%] bg-black-500 rounded-xl p-4 lg:p-8 flex flex-col items-center text-white relative overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/shape11.png')",
              }}
            ></div>
            {/* Content */}
            <div className="relative z-10 font-gothamultra w-full">
              <div className="flex flex-row justify-between gap-4 items-center">
                <div className="flex flex-1">
                  <h3 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-parrot-1100 uppercase">
                    {t("Events.Client2.title")}
                  </h3>
                </div>
                <div className="flex flex-1">
                  <p className="text-white text-sm text-right lg:text-md xl:text-lg uppercase leading-4">
                    {t("Events.Client2.subtitle")}{" "}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl xl:text-5xl xl:mt-4 font-bold  text-parrot-1100 uppercase">
                {t("Events.Client2.year")}
              </h3>
              <div className="mt-2 lg:mt-12 space-y-2 lg:space-y-4 flex flex-col font-gotham">
                <p>{t("Events.Client2.description")}</p>
                <ul className="text-left lg:space-y-2">
                  <li>• {t("Events.Client2.item1")}</li>
                  <li>• {t("Events.Client2.item2")}</li>
                  <li>• {t("Events.Client2.item3")}</li>
                  <li>• {t("Events.Client2.item4")}</li>
                  <li>• {t("Events.Client2.item5")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column - 70% width */}
          <div className="relative w-full lg:w-[70%] rounded-xl overflow-hidden">
            <Image
              src="/images/image47.png"
              alt="Corporate Souvenirs"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
