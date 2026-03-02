import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Info() {
  const { t } = useI18n();

  return (
    <div className="relative w-full xl:min-h-screen py-12 lg:py-48">
      {/* Row 1: Short text - Full width */}
      <div className="w-full mb-4 px-6 lg:px-12">
        <div className="lg:max-w-lg xl:max-w-none">
          <p className="text-md lg:text-xl text-white font-gothammedium">{t("Content.Info.intro")}</p>
        </div>
      </div>
      {/* Row 2: Title with bg-parrot-1100 - Full width */}
      <div className="w-full mb-4 bg-parrot-1100 lg:py-12">
        <div className="max-w-[70%] lg:max-w-2xl xl:max-w-none leading-tight">
          <p className="text-md lg:text-2xl font-gotham text-black-1100 px-6 py-2 lg:px-24 inline-block">
            {t("Content.Info.channels_title")}
          </p>
          <ul className="text-xs lg:text-lg text-black-1100 px-6 lg:px-24 pb-4 font-gotham list-disc list-inside space-y-1">
            {t("Content.Info.channels_list").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Row 3: Short text - Full width */}
      <div className="w-full mb-4 px-6 lg:px-12">
        <div className="max-w-lg xl:max-w-none">
          <p className="text-md lg:text-xl text-white font-gothammedium">{t("Content.Info.youtube_tagline")}</p>
        </div>
      </div>
      {/* Overlayed Image on the Right */}
      <div className="absolute top-0 right-0 w-[30%] lg:w-1/2 h-full">
        <div className="relative h-full">
          <Image
            src="/images/image-6.png"
            alt="Creative content"
            width={400}
            height={400}
            className="absolute top-1/2 right-0 lg:right-16 transform -translate-y-1/2 w-48 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
