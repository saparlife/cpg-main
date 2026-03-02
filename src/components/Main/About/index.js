"use client";

import Categories from "./Categories";
import Head from "./Head";
import SelectedWork from "./SelectedWork";
import Swiper from "./Swiper";

export default function About() {
  return (
    <>
      <section className="lg:pb-[145px] pb-[100px] relative">
        <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative">
          <Head />
          <Categories />
          <SelectedWork />
          <img src="/images/down-arw.svg" alt="" className="absolute top-[75px] right-0 -z-[1]" />
        </div>
        <Swiper />

        <img src="/images/big-downarw.svg" alt="" className="absolute bottom-0 right-0 -z-[1] xl:h-auto h-[1220px]" />
      </section>
    </>
  );
}
