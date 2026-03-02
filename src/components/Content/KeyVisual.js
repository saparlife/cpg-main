import { useI18n } from "@/i18n/useI18n";

export default function KeyVisual() {
  const { t } = useI18n();

  return (
    <div className="relative w-full">
      {/* Large text section */}
      <div className="relative w-full h-[300px] lg:h-[600px] xl:h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-start text-parrot-1100">
          <div className="text-[90px] lg:text-[250px] inline-block xl:text-[400px] font-bold leading-none tracking-tight whitespace-nowrap select-none pointer-events-none">
            <h1 className="inline-block">KEY</h1>
            <h1 className="inline-block ml-6 text-stroke-parrot text-transparent">VISUAL</h1>
          </div>
        </div>
      </div>

      {/* Two column section */}
      <div className="w-full px-4 xl:px-24 -mt-12 mb-12">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
          {/* Image column - 70% */}
          <div className="xl:col-span-7">
            <div className="w-full h-48 lg:h-96 rounded-lg overflow-hidden">
              <img src="/images/image-12.png" alt="Key Visual" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title and description column - 30% */}
          <div className="xl:col-span-3 flex flex-col justify-center font-gotham">
            <h2 className="text-2xl lg:text-6xl xl:text-4xl font-bold mb-6 text-parrot-1100">
              {t("Content.KeyVisual.title")}
            </h2>
            <p className="text-sm lg:text-xl xl:text-lg text-white leading-relaxed mb-4">
              {t("Content.KeyVisual.description")}
            </p>
            <ul className="text-sm lg:text-xl xl:text-lg text-white leading-relaxed list-disc pl-6">
              {t("Content.KeyVisual.list").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
