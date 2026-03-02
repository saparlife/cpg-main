import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

export default function Client3() {
  const { t } = useI18n();

  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-[1640px] px-[20px] md:px-[40px] mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {/* Left column - 30% width */}
          <div className="w-full lg:w-[25%] flex flex-col items-center text-black-1100 relative lg:overflow-hidden">
            <div className="bg-parrot-1100 rounded-xl p-6 lg:p-8 h-full">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                  backgroundImage: "url('/images/shape4.svg')",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full">
                <div className="space-y-12 flex flex-col items-center justify-center h-full">
                  <h3 className="uppercase text-center font-gothamultra text-4xl mb-4">{t("Digital.Client3.name")}</h3>
                  <ul className="list-disc pl-4 text-sm font-gotham">
                    {t("Digital.Client3.list").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-gotham">
                    {t("Digital.Client3.description")}
                    <br /> <br />
                    {t("Digital.Client3.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 70% width */}
          <div className="w-full lg:w-[75%] rounded-xl overflow-hidden bg-black-500">
            <Image src="/images/image73.png" alt="Image" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
