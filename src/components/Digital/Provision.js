import { useI18n } from "@/i18n/useI18n";

export default function Provision() {
  const { t } = useI18n();

  return (
    <section className="py-20">
      <div className="container mx-auto font-gothamultra">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Big Text Column */}
          <h1 className="text-7xl md:text-[175px] lg:text-right px-14 leading-0 text-parrot-1100 uppercase">
            {t("Digital.Provision.our")}
          </h1>

          <div className="px-14 lg:hidden block">
            <h1 className="text-4xl md:text-7xl xl:text-[155px] leading-tight text-white text-left uppercase">
              {t("Digital.Provision.offer")}
            </h1>
          </div>

          {/* Description Box Column */}
          <div className="bg-parrot-1100 p-8 w-full">
            {/* Description Text - Right Aligned */}
            <p className="text-2xl leading-tight">{t("Digital.Provision.description")}</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="px-14 hidden lg:block">
            <h1 className="md:text-[105px] xl:text-[145px] leading-tight text-white text-left uppercase">
              {t("Digital.Provision.offer")}
            </h1>
          </div>
          <div>
            <p className="text-parrot-1100 leading-tight text-right text-lg lg:text-4xl pt-4 lg:pt-0 px-4 lg:px-14">
              {t("Digital.Provision.social_note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
