import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Pr() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col xl:flex-row gap-6 font-gotham ">
      {/* Left column - 60% */}
      <div className="w-full xl:w-5/7 px-4 lg:px-14 py-24 space-y-6">
        <div className="text-parrot-1100 uppercase lg:px-6">
          <h2 className="text-[28px] lg:text-[60px] leading-tight">{t("Digital.Pr.title_part1")}</h2>
          <h2 className="text-[32px] lg:text-[76px] leading-tight">{t("Digital.Pr.title_part2")}</h2>
          <h2 className="text-[40px] lg:text-[88px] leading-tight">{t("Digital.Pr.title_part3")}</h2>
        </div>
        <p className="text-white lg:px-6 text-2xl">
          {t("Digital.Pr.intro")}
          <br />
          {t("Digital.Pr.intro_part2")}
        </p>
        <div className="flex items-center flex-col text-center space-y-6">
          <Image src="/images/shape16.png" alt="PR" width={800} height={500} className="mt-12 rounded-4xl" />
          <p className="text-white px-6 text-xl">{t("Digital.Pr.tagline")}</p>
        </div>
      </div>

      {/* Right column - 40% */}
      <div className="w-full xl:w-3/7 bg-parrot-1100 p-6 lg:p-12 xl:p-24 xl:py-48 text-lg">
        <p>{t("Digital.Pr.description")}</p>
        <ul className="list-disc p-4">
          {t("Digital.Pr.list").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
