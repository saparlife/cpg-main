"use client";

// import { Play } from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
// import VideoPlayer from "@/components/VideoPlayer";
import { useI18n } from "@/i18n/useI18n";

export default function Hero({ top, bottom, imageUrl = "/images/img1.png", videoUrl = "/videos/cpg_15sec_eng.webm" }) {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView]);

  // const [isVideoOpen, setIsVideoOpen] = useState(false);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // const handlePlayClick = (videoUrl, title) => {
  //   setSelectedVideo({ url: videoUrl, title });
  //   setIsVideoOpen(true);
  // };

  // const handleCloseVideo = () => {
  //   setIsVideoOpen(false);
  //   setSelectedVideo(null);
  // };

  // const handleButtonClick = (e, videoUrl, title) => {
  //   e.stopPropagation();
  //   handlePlayClick(videoUrl, title);
  // };
  return (
    <>
      {/* <VideoPlayer
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
      /> */}
      <section className="pb-[66px] overflow-hidden">
        <div className="max-w-[1760px] px-5 mx-auto w-full">
          <div className="relative">
            <img
              src="/images/top-hero.png"
              alt="top-hero"
              className="absolute top-[-1px] left-[-2px] w-[70%] h-auto z-[40]"
            />
            <p className="absolute top-0 left-0 z-[50] text-parrot-1100 font-black 4xl:text-[55px] 3xl:text-[44px] text-[10px] sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[44px] uppercase">
              {top}
            </p>
            <div className="overflow-hidden rounded-[10px] relative z-[20]">
              {/* <Image src={imageUrl} alt="CPG Media Company" width={1760} height={400} className="w-full h-auto" />
            {videoUrl && (
              <motion.button
                onClick={(e) => handleButtonClick(e, videoUrl, "Showreel")}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group pointer-events-auto"
                aria-label="Play video for Showreel"
                whileHover={prefersReducedMotion ? {} : buttonHover}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-parrot-1100 rounded-full transition-all duration-300">
                  <Play fill="black" className="text-black ml-1" />
                </div>
              </motion.button>
            )} */}
              {videoUrl && (
                <video
                  ref={videoRef}
                  src={videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <p className="absolute bottom-0 right-0 z-[50] text-parrot-1100 font-black 4xl:text-right uppercase lg:text-3xl sm:text-base text-[10px] xl:text-4xl 3xl:text-4xl 4xl:text-5xl 4xl:leading-[45px] 4xl:max-w-[1033px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[784px] 2xl:max-w-[890px] 3xl:max-w-[941px] ml-auto w-full text-right">
              {bottom}
            </p>
            <img
              src="/images/top-hero.png"
              alt="top-hero"
              className="absolute bottom-[-1px] right-0 rotate-180 w-[70%] h-auto z-[40]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
