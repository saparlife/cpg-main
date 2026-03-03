import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import MainLayout from "@/layouts/MainLayout";
import { I18nProvider } from "@/i18n/I18nProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "swiper/css";
import "swiper/css/autoplay";

export const metadata = {
  title: "CPG Media Group",
  description:
    "Мы создаем рост, доверие и узнаваемость брендов через стратегию, PR, digital-маркетинг и видео-кампании.",
  keywords: [
    "CPG Media Group",
    "интернет-маркетинг",
    "digital-маркетинг",
    "PR-услуги",
    "видео-кампании",
    "стратегия бренда",
    "создание контента",
    "SMM",
    "SEO",
    "реклама в интернете",
    "бренд-менеджмент",
    "маркетинговые услуги",
    "онлайн-продвижение",
    "видеопродакшн",
    "контент-маркетинг",
  ],
  alternates: {
    canonical: "https://cpgmediagroup.com",
  },
  openGraph: {
    title: "CPG Media Group",
    description:
      "Мы создаем рост, доверие и узнаваемость брендов через стратегию, PR, digital-маркетинг и видео-кампании.",
    url: "https://cpgmediagroup.com",
    siteName: "CPG Media Group",
    locale: "ru",
    type: "website",
    images: [
      {
        url: "https://cpgmediagroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPG Media Group - услуги интернет-маркетинга",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPG Media Group",
    description:
      "Мы создаем рост, доверие и узнаваемость брендов через стратегию, PR, digital-маркетинг и видео-кампании.",
    images: ["https://cpgmediagroup.com/og-image.png"],
  },
  metadataBase: new URL("https://cpgmediagroup.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CPG Media Group",
  url: "https://cpgmediagroup.com",
  logo: "https://cpgmediagroup.com/og-image.png",
  description:
    "Мы создаем рост, доверие и узнаваемость брендов через стратегию, PR, digital-маркетинг и видео-кампании.",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Астана",
      addressCountry: "KZ",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Алматы",
      addressCountry: "KZ",
    },
  ],
  sameAs: [
    "https://www.instagram.com/cpgmediagroup",
    "https://www.youtube.com/@cpgmediagroup",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/fonts/gotham_black.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/gotham_medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/gotham_ultra.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-MCCZXSS7" />
      <body className="antialiased bg-black-1100">
        <SmoothScroll>
          <I18nProvider>
            <MainLayout>{children}</MainLayout>
          </I18nProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
