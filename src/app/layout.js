import "@/styles/globals.css";
import Script from "next/script";
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
        url: "https://cpgmediagroup.com/og-image.png", // Replace with your actual image path
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
    images: ["https://cpgmediagroup.com/og-image.png"], // Same image as above
  },
  metadataBase: new URL("https://cpgmediagroup.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" theme="light">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCCZXSS7');`,
          }}
        />
      </head>
      <body className="antialiased bg-black-1100">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCCZXSS7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          <I18nProvider>
            <MainLayout>{children}</MainLayout>
          </I18nProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
