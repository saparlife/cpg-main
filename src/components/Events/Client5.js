import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client5() {
  const { t } = useI18n();
  return (
    <div className="w-full h-auto md:h-screen p-4 md:p-5 box-border md:px-14 px-4">
      {/* Three columns (desktop) / Stacked (mobile) */}
      <div className="flex h-full gap-4 md:gap-5 md:flex-row flex-col">
        {/* Column 1: Two rows 80/20 (desktop) / Stacked (mobile) */}
        <div className="w-full md:flex-1 flex flex-col gap-4 md:gap-5 overflow-hidden md:min-h-0 min-h-auto">
          <div
            className="md:flex-[0.8] flex-1 rounded-lg md:rounded-xl relative overflow-hidden min-h-[250px] md:h-auto bg-cover bg-center"
            style={{ backgroundImage: "url(/images/image59.png)" }}
          >
            <div className="text-3xl lg:text-4xl xl:text-6xl uppercase font-gothamultra absolute bottom-3 md:bottom-5 left-3 md:left-5 z-10 text-parrot-1100 w-full pr-12 md:pr-20 pl-3 md:pl-6">
              <h3>{t("Events.Client5.title")}</h3>
              <h3 className="text-right">{t("Events.Client5.year")}</h3>
            </div>
          </div>
          <div className="md:flex-[0.2] flex-1 flex flex-col">
            <div className="p-4 md:p-10 h-full flex flex-col rounded-lg md:rounded-xl justify-center text-black-1100 bg-parrot-1100">
              {/* Content for 20% row */}
              <h4 className="m-0 mb-2 md:mb-2.5 text-lg lg:text-2xl xl:text-3xl font-gothamultra">
                {t("Events.Client5.description")}
              </h4>
              <p className="m-0 text-sm md:text-lg font-gothamultra">{t("Events.Client5.description_text")}</p>
            </div>
          </div>
        </div>

        {/* Column 2: Single column */}
        <div
          className="w-full md:flex-1 rounded-lg md:rounded-lg overflow-hidden md:min-h-0 h-[350px] md:h-auto relative bg-cover bg-center"
          style={{ backgroundImage: "url(/images/image60.png)" }}
        ></div>

        {/* Column 3: Two rows 10/90 (desktop) / Stacked (mobile) */}
        <div className="w-full md:flex-1 flex flex-col gap-4 md:gap-5 rounded-lg overflow-hidden md:min-h-0">
          <div className="md:flex-[0.1] flex-none flex flex-col h-auto">
            <div className="p-4 md:p-5 h-full flex flex-col justify-center border-parrot-1100 border-2 md:border-[5px] rounded-lg md:rounded-xl">
              {/* Content for 10% row */}
              <h4 className="m-0 text-sm md:text-xl uppercase text-center text-parrot-1100 font-gothamultra">
                {t("Events.Client5.tagline")}
              </h4>
            </div>
          </div>
          <div
            className="md:flex-[0.9] flex-1 rounded-lg md:rounded-xl relative overflow-hidden min-h-[250px] md:h-auto bg-cover bg-center"
            style={{ backgroundImage: "url(/images/image61.png)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
