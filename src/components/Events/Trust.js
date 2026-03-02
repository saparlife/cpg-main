import { useI18n } from "@/i18n/useI18n";

export default function Trust() {
  const { t } = useI18n();

  const blocks = [
    {
      number: t("Events.Trust.block1_number"),
      title: t("Events.Trust.block1_text"),
    },
    {
      number: t("Events.Trust.block2_number"),
      title: t("Events.Trust.block2_text"),
    },
    {
      number: t("Events.Trust.block3_number"),
      title: t("Events.Trust.block3_text"),
    },
    {
      number: t("Events.Trust.block4_number"),
      title: t("Events.Trust.block4_text"),
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 font-gothamultra uppercase relative z-10">
          <h2 className="text-3xl lg:text-6xl text-white mb-4">{t("Events.Trust.heading")}</h2>
          <p className="text-2xl lg:text-6xl text-parrot-1100">{t("Events.Trust.heading_part2")}</p>
        </div>
        <div className="block xl:hidden col-span-4 relative z-20">
          <div className="h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/image63.png" alt="Trust and Excellence" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-6 xl:grid-cols-10 gap-2 lg:gap-8 relative">
          {/* Left Column - 30% (3/10) */}
          <div className="col-span-3 space-y-8">
            {/* Block 1 */}
            <Block number={blocks[0].number} title={blocks[0].title} />

            {/* Block 2 */}
            <Block number={blocks[1].number} title={blocks[1].title} />
          </div>

          {/* Middle Column - 40% (4/10) */}
          <div className="hidden xl:block col-span-4 relative z-20">
            <div className="h-full min-h-[600px] rounded-lg overflow-hidden -mt-20 shadow-2xl">
              <img src="/images/image63.png" alt="Trust and Excellence" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - 30% (3/10) */}
          <div className="col-span-3 space-y-8">
            {/* Block 3 */}
            <Block number={blocks[2].number} title={blocks[2].title} />

            {/* Block 4 */}
            <Block number={blocks[3].number} title={blocks[3].title} />
          </div>
        </div>
      </div>
    </section>
  );
}

const Block = ({ number, title }) => {
  return (
    <div className="p-2 lg:p-6 text-center font-gothamultra uppercase">
      <div className="text-xl lg:text-5xl font-bold text-black-500 mb-3">{number}</div>
      <h3 className="text-xs lg:text-xl font-semibold text-white mb-2">{title}</h3>
    </div>
  );
};
