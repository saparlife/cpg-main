import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Brand() {
  const { t } = useI18n();

  const listItems = t("Digital.Brand.list").map((title) => ({ title }));

  return (
    <div className="xl:min-h-screen mb-[100px] xl:mb-0">
      {/* Titles Section */}
      <section className="px-6 lg:px-12 pt-20 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl text-white font-gothamultra uppercase">{t("Digital.Brand.title")}</h3>
            <h1 className="font-gothamultra text-parrot-1100 text-7xl leading-none uppercase">
              {t("Digital.Brand.subtitle")}
            </h1>
          </div>
        </div>
      </section>

      {/* 3 Column Grid - 8 Items */}
      <section className="px-6 lg:px-12 py-20 bg-parrot-1100 font-gotham relative">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Image src="/images/shape7.svg" alt="Background Shape" width={1024} height={1024} className="w-full h-auto" />
        </div>
        <div className="max-w-7xl mx-auto z-30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row gap-4">
                  <div className="text-4xl lg:text-6xl w-1/3 font-gothamultra text-black-1100">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-gothammedium text-md w-2/3 lg:text-lg text-black-1100">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
