import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Forums() {
  const { t } = useI18n();
  return (
    <div className="p-5 lg:p-15">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Column 1: Title + text, text block, image */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 font-gotham">
            <h2 className="text-5xl lg:text-7xl leading-tight uppercase mb-5 text-parrot-1100">
              {t("Events.Forums.title")}
            </h2>
            <p className="text-lg leading-tight lg:text-2xl text-white">{t("Events.Forums.description")}</p>
          </div>
          <div className="flex-1">
            <div className="bg-parrot-1100 p-2 lg:p-8 rounded-lg h-full flex items-center">
              <p className="text-sm lg:text-2xl font-gotham leading-relaxed m-0">{t("Events.Forums.subtitle")}</p>
            </div>
          </div>
          <div className="flex-1 hidden xl:block">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-18.png"
                alt="Forum event"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 block xl:hidden">
            <div className="border-parrot-1100 border-[5px] p-2 lg:p-8 rounded-xl h-full flex items-center justify-center">
              <p className="text-xl lg:text-4xl font-gotham uppercase text-parrot-1100 text-center">
                {t("Events.Forums.box_title")}
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: text block, image, image */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 block xl:hidden">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-18.png"
                alt="Forum event"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 hidden xl:block">
            <div className="border-parrot-1100 border-[5px] p-2 lg:p-8 rounded-xl h-full flex items-center justify-center">
              <p className="text-xl lg:text-4xl font-gotham uppercase text-parrot-1100 text-center">
                {t("Events.Forums.box_title")}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-19.png"
                alt="Conference presentation"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-20.png"
                alt="Networking event"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Column 3: image, image */}
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-21.png"
                alt="Panel discussion"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full overflow-hidden rounded-lg">
              <Image
                width={600}
                height={400}
                src="/images/image-22.png"
                alt="Forum audience"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
