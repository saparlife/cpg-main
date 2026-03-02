"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import CursorMouse from "@/components/Cursor";
import MarqueeSection from "@/components/MarqueeSection";

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
