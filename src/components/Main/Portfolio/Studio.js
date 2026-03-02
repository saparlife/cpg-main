import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";
import DragCursor from "@/components/DragCursor";
import { Autoplay } from "swiper/modules";

const slidesData1 = [
  "/images/studio/almaty-1.png",
  "/images/studio/almaty-2.png",
  "/images/studio/almaty-3.png",
  "/images/studio/almaty-4.png",
  "/images/studio/almaty-5.png",
  "/images/studio/almaty-6.png",
  "/images/studio/almaty-7.png",
  "/images/studio/almaty-8.png",
];

const slidesData2 = [
  "/images/studio/astana-1.png",
  "/images/studio/astana-2.png",
  "/images/studio/astana-3.png",
  "/images/studio/astana-4.png",
  "/images/studio/astana-5.png",
  "/images/studio/astana-6.png",
  "/images/studio/astana-7.png",
  "/images/studio/astana-8.png",
  "/images/studio/astana-9.png",
];

export default function Studio() {
  const { t } = useI18n();
  return (
    <div className="pt-2">
      <div className="relative">
        <Image src="/images/curved-line.svg" alt="Studio" width={1400} height={20} className="w-full h-auto" />
        <div className="absolute right-0 lg:right-[40px] top-[-10px]">
          <h2 className="font-gotham text-sm lg:text-4xl uppercase">
            <span className="text-parrot-1100">{t("Main.Portfolio.Studio.title")}</span>
            <span className="text-white ml-4">{t("Main.Portfolio.Studio.base")}</span>
          </h2>
        </div>
        <div className="absolute left-0 top-[5px] lg:left-[40px] lg:top-[20px]">
          <h2 className="font-gotham text-sm lg:text-4xl uppercase">
            <span className="text-parrot-1100">CPG SPACE</span>
            <span className="text-white ml-4">{t("footer.almaty")}</span>
          </h2>
        </div>
      </div>
      <DragCursor>
        <Swiper
          className="!pb-[20px] lg:!pb-[100px] mt-6 lg:mt-10"
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >
          {slidesData1.map((slide) => (
            <SwiperSlide key={slide} className="!w-auto !h-[150px] lg:!h-[300px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={slide}
                  alt="CPG Studio Almaty"
                  width={400}
                  height={300}
                  className="w-auto h-[150px] lg:h-[300px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DragCursor>
      <div className="relative">
        <Image src="/images/curved-line.svg" alt="Studio" width={1400} height={20} className="w-full h-auto" />
        <div className="absolute left-0 top-[5px] lg:left-[40px] lg:top-[20px]">
          <h2 className="font-gotham text-sm lg:text-4xl uppercase">
            <span className="text-parrot-1100">CPG SPACE</span>
            <span className="text-white ml-4">{t("footer.astana")}</span>
          </h2>
        </div>
      </div>
      <DragCursor>
        <Swiper
          className="!pb-[20px] lg:!pb-[100px] mt-6 lg:mt-10"
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >
          {slidesData2.map((slide) => (
            <SwiperSlide key={slide} className="!w-auto !h-[150px] lg:!h-[300px]">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={slide}
                  alt="CPG Studio Astana"
                  width={400}
                  height={300}
                  className="w-auto h-[150px] lg:h-[300px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DragCursor>
    </div>
  );
}
