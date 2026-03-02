import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Animation() {
  const { t } = useI18n();

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Column - 40% */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/image-7.png"
                alt="Animation showcase"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 font-gotham mb-12">
              <h2 className="text-5xl lg:text-6xl xl:text-8xl font-gothamultra text-parrot-1100 uppercase leading-tight">
                {t("Content.Animation.title")}
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">{t("Content.Animation.description_1")}</p>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">{t("Content.Animation.description_2")}</p>
            </div>

            <div className="overflow-hidden rounded-lg mt-8">
              <Image
                src="/images/image-8.png"
                alt="Animation process"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
