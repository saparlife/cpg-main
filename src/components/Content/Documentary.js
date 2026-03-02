import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Documentary() {
  const { t } = useI18n();

  return (
    <div className="xl:min-h-screen bg-black-1300">
      {/* Documentary Section */}
      <section className="relative px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-gothamultra text-parrot-1100 text-4xl lg:text-8xl xl:text-9xl leading-none">
            {t("Content.Documentary.title")}
          </h1>
          <p className="text-white text-md lg:text-4xl leading-tight font-gothammedium">
            {t("Content.Documentary.note")}
          </p>
          <p className="text-parrot-1100 text-md lg:text-4xl leading-tight font-gothammedium">
            {t("Content.Documentary.tagline")}
          </p>
        </div>
      </section>

      {/* Full Width Image */}
      <div className="relative w-full h-[60vh] lg:h-[80vh]]">
        <Image src="/images/image-4.png" alt="Documentary filmmaking" fill className="object-cover" priority />
      </div>
    </div>
  );
}
