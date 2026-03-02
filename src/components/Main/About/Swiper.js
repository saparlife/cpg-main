"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import DragCursor from "@/components/DragCursor";
import "swiper/css";

export default function WorkSwiper() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const slides = [
    {
      id: 1,
      img: "/images/work-img1.png",
      title: "91 x Otbasy Bank \n- Jur Mapelep MV",
      yearImg: "/images/year2024.png",
      video: "/videos/91_1.webm",
    },
    {
      id: 2,
      img: "/images/work-img2.png",
      title: "ARO - Ösiet MV",
      yearImg: "/images/year2025.png",
      video: "/videos/Аро_1.webm",
    },
    {
      id: 3,
      img: "/images/work-img3.png",
      title: "Eurasian Bank \n- Premium Card",
      yearImg: "/images/year2024.png",
      video: "/videos/Евразийский банк_1.webm",
    },
    {
      id: 4,
      img: "/images/work-img4.png",
      title: "Kazakhtelecom \nBusiness- Kasipker",
      yearImg: "/images/year2024.png",
      video: "/videos/КТБ_1.webm",
    },
    {
      id: 5,
      img: "/images/work-img5.png",
      title: "Jetour - X90\nCommercial",
      yearImg: "/images/year2025.png",
      video: "/videos/Джетур_1.webm",
    },
    {
      id: 6,
      img: "/images/work-img6.png",
      title: "Kinopark\nCommercial",
      yearImg: "/images/year2025.png",
      video: "/videos/КИНОПАРК - понедельник_1.webm",
    },
    {
      id: 7,
      img: "/images/work-img7.png",
      title: "Toyota - Hybrid \nCommercial",
      yearImg: "/images/year2024.png",
      video: "/videos/Тойота_1.webm",
    },
    {
      id: 8,
      img: "/images/work-img8.png",
      title: "BI Group \n2025 new year",
      yearImg: "/images/year2025.png",
      video: "/videos/БИАЙ НГ_1.webm",
    },
    {
      id: 9,
      img: "/images/work-img9.png",
      title: "Otbasy Bank\nCommercial",
      yearImg: "/images/year2024.png",
      video: "/videos/ОБ4_1.webm",
    },
    {
      id: 10,
      img: "/images/work-img10.png",
      title: "Cadillac \nCommercial",
      yearImg: "/images/year2024.png",
      video: "/videos/Кадиллак_1.webm",
    },
  ];

  const handlePlayClick = (videoUrl, title) => {
    setSelectedVideo({ url: videoUrl, title });
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  const handleButtonClick = (e, videoUrl, title) => {
    e.stopPropagation();
    handlePlayClick(videoUrl, title);
  };

  return (
    <div className="sm:px-0 px-5 relative">
      <DragCursor>
        <Swiper
          className="workSwiper !pl-[calc(50vw-860px)] !ml-auto"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="relative block">
                <div className="relative">
                  <Image
                    src={slide.img}
                    alt={`${slide.title} Project`}
                    width={800}
                    height={500}
                    className="w-[300px] lg:w-[800px] h-auto"
                  />
                  {/* Play Button - Only show if video exists */}
                  {slide.video && (
                    <button
                      onClick={(e) => handleButtonClick(e, slide.video, slide.title)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group transition-all duration-300 pointer-events-auto"
                      aria-label={`Play video for ${slide.title}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-parrot-1100 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Play fill="black" className="text-black ml-1" />
                      </div>
                    </button>
                  )}
                </div>
                <div className="relative bottom-0">
                  <h3 className="text-[10px] lg:text-2xl leading-tight font-black uppercase text-white font-gotham flex items-center justify-start gap-2 lg:gap-4 absolute left-[5px] md:left-[50px] top-[-30px] md:top-[-70px] whitespace-pre-wrap w-[350px]">
                    <span className="text-sm lg:text-xl text-parrot-1100 font-gotham font-black">[{slide.id}]</span>{" "}
                    {slide.title}
                  </h3>
                </div>
                <Image
                  src={slide.yearImg}
                  alt="Year Image"
                  width={150}
                  height={150}
                  className="absolute lg:top-0 -top-1.5 4xl:right-0 right-0 lg:right-3 -z-[1] 4xl:h-auto 3xl:h-[130px] 2xl:h-[140px] xl:h-[120px] lg:h-[130px] h-[60px] w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DragCursor>

      {/* Video Player Modal */}
      <VideoPlayer
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      />
    </div>
  );
}
