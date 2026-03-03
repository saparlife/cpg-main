"use client";

import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import MarqueeSection from "@/components/MarqueeSection";

const CursorMouse = dynamic(() => import("@/components/Cursor"), { ssr: false });

export default function MainLayout({ children }) {
  return (
    <ParallaxProvider>
      <div data-scroll-container>
        <Header />
        <Menu />
        {children}
        <MarqueeSection />
        <Footer />
        <CursorMouse />
      </div>
    </ParallaxProvider>
  );
}
