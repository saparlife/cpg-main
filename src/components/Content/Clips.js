import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Clips() {
  const { t } = useI18n();

  return (
    <div className="w-full xl:h-screen p-5 box-border">
      {/* Three columns with equal 1/3 width */}
      <div className="flex h-full gap-5 md:flex-row flex-col">
        {/* Column 1: Two rows 80/20 */}
        <div className="flex-1 flex flex-col gap-5 overflow-hidden">
          <div className="flex-[0.8] flex flex-col rounded-xl relative overflow-hidden min-h-[200px] md:min-h-[500px] xl:min-h-0">
            <Image src="/images/image-9.png" alt="Clip 1" fill className="object-cover" />
          </div>
          <div className="flex-[0.2] flex flex-col min-h-[150px]">
            <div className="p-10 h-full flex flex-col rounded-xl justify-center text-black-1100 bg-parrot-1100">
              {/* Content for 20% row */}
              <h4 className="m-0 mb-2.5 text-2xl lg:text-xl xl:text-3xl font-gothamultra">
                {t("Content.Clips.music_title")}
              </h4>
              <p className="m-0 text-sm xl:text-md font-gothammedium">{t("Content.Clips.music_description")}</p>
            </div>
          </div>
        </div>

        {/* Column 2: Single column */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <div className="h-full w-full flex flex-col justify-center relative  min-h-[200px] md:min-h-[500px] xl:min-h-0">
            <Image src="/images/image-10.png" alt="Clip 2" fill className="object-cover" />
          </div>
        </div>

        {/* Column 3: Two rows 10/90 */}
        <div className="flex-1 flex flex-col gap-5 rounded-lg overflow-hidden">
          <div className="flex-[0.1] flex flex-col min-h-[100px]">
            <div className="p-5 h-full flex flex-col justify-center border-parrot-1100 border-[5px] rounded-xl">
              {/* Content for 10% row */}
              <h4 className="m-0 text-xl xl:text-3xl uppercase text-center text-parrot-1100 font-gotham">
                {t("Content.Clips.tagline")}
              </h4>
            </div>
          </div>
          <div className="flex-[0.9] flex flex-col rounded-xl overflow-hidden">
            <div className="h-full w-full flex flex-col justify-center relative min-h-[200px] md:min-h-[500px] xl:min-h-0">
              <Image src="/images/image-11.png" alt="Clip 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
