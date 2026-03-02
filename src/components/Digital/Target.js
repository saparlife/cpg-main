import { useI18n } from "@/i18n/useI18n";

export default function Target() {
  const { t } = useI18n();

  return (
    <div className="flex justify-center items-center px-5 py-10">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[120px_1fr] gap-2 lg:gap-4 font-gotham w-full items-center justify-center">
          {/* Cell 1: "+" */}
          <div className="flex items-center justify-center text-7xl lg:text-9xl text-parrot-1100 font-bold">
            {t("Digital.Target.plus")}
          </div>

          {/* Cell 2: "Target" */}
          <div className="flex text-5xl lg:text-8xl uppercase text-parrot-1100 font-bold">
            {t("Digital.Target.target")}
          </div>

          {/* Cell 3: "SEO" rotated 90 degrees */}
          <div className="flex items-center justify-center text-7xl lg:text-9xl font-bold text-stroke-parrot text-transparent -rotate-90">
            {t("Digital.Target.seo")}
          </div>

          {/* Cell 4: Big text */}
          <div className="flex flex-1 items-center justify-center text-[10px] lg:text-xl text-white font-bold">
            {t("Digital.Target.description_part1")}
            <br />
            <br />
            {t("Digital.Target.description_part2")}
            <br />
            <br />
            {t("Digital.Target.description_part3")}
          </div>
        </div>
      </div>
    </div>
  );
}
