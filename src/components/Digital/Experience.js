import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Experience() {
  const { t } = useI18n();

  return (
    <div className="w-full relative min-h-[400px] xl:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/shape6.svg" alt="" width={1024} height={1024} className="w-full h-auto" />
      </div>
      <div className="relative z-10 container mx-auto px-12 flex flex-col items-center justify-center">
        {/* Big centered title */}
        <h1 className="text-5xl lg:text-9xl lg:pr-48 font-gothamultra text-center uppercase text-parrot-1100">
          {t("Digital.Experience.years")}
        </h1>

        {/* Second row with text and small image */}
        <div className="flex flex-col md:flex-row pl-0 md:pl-48 items-center font-gothamultra justify-center gap-8 text-center w-full">
          <div>
            <p className="text-2xl md:text-7xl leading-tight text-white uppercase">
              {t("Digital.Experience.in_digital")}
            </p>
          </div>
          <div
            style={{
              background: "url('/images/image65.png') no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left center",
            }}
            className="min-h-[120px] object-cover rounded-lg flex items-center justify-start h-[120px]"
          >
            <p className="font-gotham text-lg max-w-[350px] py-4 pr-[40px] lg:pr-[60px] lg:pl-[50px] xl:pr-[90px] pl-[40px] xl:pl-[40px] text-white leading-6 text-center">
              {t("Digital.Experience.tagline")} <br />
              {t("Digital.Experience.tagline_alt")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
