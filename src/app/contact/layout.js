export const metadata = {
  title: "Контакты — CPG Media Group",
  description:
    "Свяжитесь с CPG Media Group для обсуждения вашего проекта. Мероприятия, digital-маркетинг, контент-продакшн — мы готовы помочь.",
  alternates: {
    canonical: "https://cpgmediagroup.com/contact",
  },
  openGraph: {
    title: "Контакты — CPG Media Group",
    description:
      "Свяжитесь с CPG Media Group для обсуждения вашего проекта.",
    images: [{ url: "https://cpgmediagroup.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты — CPG Media Group",
    description:
      "Свяжитесь с CPG Media Group для обсуждения вашего проекта.",
    images: ["https://cpgmediagroup.com/og-image.png"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
