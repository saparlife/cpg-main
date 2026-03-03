import { useI18n } from "@/i18n/useI18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="py-10 3xl:pb-[91px] min-h-[450px] xl:min-h-auto">
      <div className="max-w-[1758px] mx-auto px-5 w-full">
        <div className="flex items-start justify-between xl:pb-10 md:flex-nowrap flex-wrap">
          <div className="flex items-start xl:gap-[50px] md:max-w-[560px] 3xl:max-w-[614px] md:w-full xl:flex-row flex-col">
            <h4 className="xl:text-5xl text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase font-gotham flex flex-col">
              {t("footer.office")}
              <span className="text-xl text-parrot-1100">{t("footer.astana")}</span>
            </h4>
            <div>
              <p className="md:text-lg text-base font-normal text-white/40 pb-3 md:pb-7">
                {t("footer.company_name")}
                <br />
                {t("footer.address")}: {t("footer.astana_address")}
              </p>
            </div>
          </div>
          <div className="flex items-start sm:py-0 py-5 xl:gap-[50px] md:max-w-[560px] 3xl:max-w-[614px] sm:w-1/2 md:w-full xl:flex-row flex-col">
            <h4 className="xl:text-5xl text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase font-gotham flex flex-col">
              {t("footer.office")}
              <span className="text-xl text-parrot-1100">{t("footer.almaty")}</span>
            </h4>
            <div>
              <p className="md:text-lg text-base font-normal text-white/40 pb-0 xl:pb-7">
                {t("footer.company_name")}
                <br />
                {t("footer.address")}: {t("footer.almaty_address")}
              </p>
            </div>
          </div>
          <ol>
            <li className="pb-2">
              <a
                href="https://www.instagram.com/cpgmediagroup"
                className="text-white text-base sm:text-lg md:text-xl xl:text-2xl font-black uppercase font-gotham hover:text-parrot-1100"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="pb-2">
              <a
                href="https://www.youtube.com/@cpgmediagroup"
                className="text-white text-base sm:text-lg md:text-xl xl:text-2xl font-black uppercase font-gotham hover:text-parrot-1100"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
          </ol>
        </div>
        <p className="mt-5 lg:mt-0 text-[10px] lg:text-lg font-black uppercase text-white font-gotham">
          ©{new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
