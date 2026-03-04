"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import DragCursor from "@/components/DragCursor";
import { useI18n } from "@/i18n/useI18n";
import resolveText from "../utils/resolveText";
import "swiper/css";

export default function GallerySwiper({
  slides = [],
  spaceBetween = 30,
  autoplayDelay = 3000,
  className = "",
}) {
  const { t } = useI18n();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoOpen = (e, videoUrl, title) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVideo({ url: videoUrl, title });
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className={`sm:px-0 px-5 relative ${className}`}>
      <DragCursor>
        <Swiper
          className="workSwiper !pl-[calc(50vw-860px)] !ml-auto"
          modules={[Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >
          {slides.map((slide, index) => {
            const slideTitle = resolveText(slide.title, t);
            return (
              <SwiperSlide key={index} className="!w-auto">
                <div className="relative block">
                  <div className="relative">
                    <Image
                      src={slide.img}
                      alt={slideTitle}
                      width={800}
                      height={500}
                      className="w-[300px] lg:w-[800px] h-auto"
                    />
                    {slide.video && (
                      <button
                        onClick={(e) => handleVideoOpen(e, slide.video, slideTitle)}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                      >
                        <div className="flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-parrot-1100 rounded-full hover:scale-110 transition-transform">
                          <Play fill="black" className="text-black ml-1" />
                        </div>
                      </button>
                    )}
                  </div>
                  <h3 className="text-[10px] lg:text-2xl font-gotham uppercase mt-4">
                    {slide.id && (
                      <span className="text-parrot-1100">[{slide.id}]</span>
                    )}{" "}
                    {slideTitle}
                  </h3>
                  {slide.yearImg && (
                    <Image
                      src={slide.yearImg}
                      alt="Year"
                      width={150}
                      height={150}
                      className="absolute lg:top-0 -top-1.5 right-0 -z-[1] w-[70px] lg:w-[150px]"
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </DragCursor>
      <VideoPlayer
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      />
    </div>
  );
}
