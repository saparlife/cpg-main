export const metadata = {
  title: "Контент-продакшн — CPG Media Group",
  description:
    "Полный цикл видеопроизводства: документальные фильмы, рекламные ролики, анимация, клипы и key visual. Профессиональный продакшн от CPG Media Group.",
  alternates: {
    canonical: "https://cpgmediagroup.com/content",
  },
  openGraph: {
    title: "Контент-продакшн — CPG Media Group",
    description:
      "Полный цикл видеопроизводства: документальные фильмы, рекламные ролики, анимация, клипы и key visual.",
    images: [{ url: "https://cpgmediagroup.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контент-продакшн — CPG Media Group",
    description:
      "Полный цикл видеопроизводства: документальные фильмы, рекламные ролики, анимация, клипы и key visual.",
    images: ["https://cpgmediagroup.com/og-image.png"],
  },
};

export default function ContentLayout({ children }) {
  return children;
}
