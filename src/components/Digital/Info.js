import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Info() {
  const { t } = useI18n();

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/shape6.svg" alt="" width={1024} height={1024} className="w-full h-auto" />
      </div>
      <div className="relative z-10 container mx-auto px-12 flex flex-col items-center justify-center space-y-4">
        {/* Big centered title */}
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-gothamultra uppercase text-white">
            {t("Digital.Info.title_part1")}{" "}
          </h1>
          <h1 className="text-3xl lg:text-7xl font-gothamultra uppercase text-parrot-1100">
            {t("Digital.Info.title_part2")}
          </h1>
        </div>

        {/* Second row with text and small image */}
        <div
          style={{
            background: "url('/images/image70.png') no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left center",
          }}
          className="h-[120px] min-h-[120px] object-cover rounded-lg flex items-center justify-start"
        >
          <p className="pl-[110px] pr-[10px] lg:pl-[170px] lg:pr-[40px] font-gotham text-xs lg:text-md max-w-[400px] py-4 leading-tight">
            {t("Digital.Info.brand_note_part1")}
            <br />
            {t("Digital.Info.brand_note_part2")}
          </p>
        </div>
        <p className="text-center max-w-3xl text-sm lg:text-lg font-gothammedium text-white mt-6">
          {t("Digital.Info.description")}
        </p>
      </div>
    </div>
  );
}
