import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client2() {
  const { t } = useI18n();

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1640px] px-6 lg:px-[20px] md:px-[40px] mx-auto w-full relative z-20">
        <div className="rounded-xl overflow-hidden h-[400px] lg:h-[500px] bg-black-500 relative w-full font-gotham">
          {/* Background Image */}
          <Image
            src="/images/image72.png"
            alt="background"
            fill
            className="object-cover opacity-25 lg:opacity-100"
          />

          {/* Top Left Content */}
          <div className="absolute top-6 left-6 z-10 p-2 lg:p-6 max-w-md space-y-4">
            <h3 className="text-parrot-1100 font-bold text-2xl lg:text-6xl">{t("Digital.Client2.name")}</h3>
            <p className="text-white text-xs lg:text-sm mb-4">{t("Digital.Client2.tagline")}</p>
            <ul className="list-disc text-xs lg:text-sm text-white pl-4">
              {t("Digital.Client2.list").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="block lg:hidden">
              <h3 className="text-white font-bold text-xs lg:text-lg">{t("Digital.Client2.message")}</h3>
              <p className="text-parrot-1100 text-xs lg:text-md">{t("Digital.Client2.note")}</p>
            </div>
          </div>

          {/* Bottom Right Content */}
          <div className="hidden lg:block absolute bottom-6 right-6 z-10 w-[300px] space-y-4">
            <h3 className="text-white font-bold text-lg">{t("Digital.Client2.message")}</h3>
            <p className="text-parrot-1100 text-md">{t("Digital.Client2.note")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
