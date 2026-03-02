import Image from "next/image";

export default function MarqueeSection() {
  return (
    <div className="bg-parrot-1100 py-6">
      <div className="marquee-container overflow-hidden relative w-full">
        <div className="marquee-track flex w-max gap-[100px]">
          {[...Array(18)].map((_, i) => (
            <Image
              key={i}
              src="/images/cpg-brand.svg"
              alt="CPG Brand"
              width={120}
              height={55}
              className="md:h-[55px] sm:h-11 h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
