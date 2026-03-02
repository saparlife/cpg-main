import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale1 = useTransform(scale0, [1, 1.5], [1, 1.35]);
  const scale2 = useTransform(scale1, [1, 0.75], [1, 1.05]);
  const y0 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section ref={ref} className="lg:pb-[140px] pb-[60px] sm:pb-[100px]">
      <div className="max-w-[1760px] px-5 mx-auto w-full overflow-hidden">
        <motion.div style={{ y: y0, scale: scale0 }} className="overflow-hidden relative z-[5]">
          <Image
            src="/images/cpg-main.png"
            alt="CPG Media Group"
            width={1760}
            height={600}
            priority
            className="w-full h-auto"
          />
        </motion.div>
        <motion.img
          src="/images/shape1.svg"
          alt=""
          className="my-4 relative z-[2]"
          style={{ y: y1, scale: scale1, opacity }}
        />
        <motion.img
          src="/images/shape2.svg"
          alt=""
          className="relative z-[2]"
          style={{ y: y2, scale: scale2, opacity }}
        />
      </div>
    </section>
  );
}
