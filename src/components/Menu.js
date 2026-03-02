import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { useState, useEffect } from "react";

const RollText = ({ children, href }) => {
  return (
    <Link href={href} className="relative block overflow-hidden h-[1.2em] group">
      <span className="flex flex-col transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[4em]">
        <span className="md:text-lg text-xs font-black font-gotham text-white uppercase block h-[1.4em] leading-[1.2em]">
          {children}
        </span>
        <span className="md:text-lg text-xs font-black font-gotham text-white/50 uppercase block h-[1.4em] leading-[1.2em] blur-[0.5px]">
          {children}
        </span>
        <span className="md:text-lg text-xs font-black font-gotham text-white/30 uppercase block h-[1.4em] leading-[1.2em] blur-[0.5px]">
          {children}
        </span>
        <span className="md:text-lg text-xs font-black font-gotham text-parrot-1100 uppercase block h-[1.4em] leading-[1.2em]">
          {children}
        </span>
      </span>
    </Link>
  );
};

export default function Menu() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY < lastScrollY;
      const isNearBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight - 100;

      if (isScrollingDown && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      id="services"
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[10001] bg-parrot-1100 px-[5px] rounded-[50px] max-w-[660px] w-full mx-auto h-[66px] sm:h-[76px] mb-4"
      style={{
        transform: `translateY(${isVisible ? "0" : "120%"})`,
        transition: "transform 0.3s ease",
      }}
    >
      <div className="bg-black-1200 rounded-[50px] h-[60px] sm:h-[76px] flex items-center justify-center">
        <ol className="flex items-center justify-center gap-5 sm:gap-11 md:gap-[100px]">
          <li>
            <RollText href="/events">{t("services.events.name")}</RollText>
          </li>
          <li>
            <RollText href="/content">{t("services.content.name")}</RollText>
          </li>
          <li>
            <RollText href="/digital">{t("services.digital.name")}</RollText>
          </li>
        </ol>
      </div>
    </div>
  );
}
