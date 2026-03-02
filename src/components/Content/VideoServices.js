import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function VideoServices() {
  const { t, language } = useI18n();

  let image = "/images/image-13.png";
  if (language === "en") {
    image = "/images/image-13-en.png";
  } else if (language === "kz") {
    image = "/images/image-13-kz.png";
  }

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] xl:h-screen my-24">
      {/* Full width image */}
      <Image src={image} alt="Video Services Background" width={1920} height={1080} className="w-full h-full object-contain" />

      {/* Text overlay 1 - Top Left */}
      <div className="absolute top-8 left-8 z-10 font-gothamultra uppercase leading-tight text-4xl lg:text-6xl xl:text-6xl">
        <h2 className="text-parrot-1100">{t("Content.VideoServices.title")}</h2>
        <h2 className="text-white">{t("Content.VideoServices.subtitle")}</h2>
      </div>

      {/* Text overlay 2 - Bottom Right */}
      <div className="absolute bottom-8 right-8 text-white z-10 text-right font-gotham">
        <p className="text-md lg:text-2xl max-w-md">{t("Content.VideoServices.tagline")}</p>
      </div>
    </div>
  );
}
