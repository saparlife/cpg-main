export const metadata = {
  title: "Digital-маркетинг — CPG Media Group",
  description:
    "SMM, таргетированная реклама, PR, брендинг и digital-стратегия. Комплексное продвижение бизнеса в интернете от CPG Media Group.",
  alternates: {
    canonical: "https://cpgmediagroup.com/digital",
  },
  openGraph: {
    title: "Digital-маркетинг — CPG Media Group",
    description:
      "SMM, таргетированная реклама, PR, брендинг и digital-стратегия. Комплексное продвижение бизнеса в интернете.",
    images: [{ url: "https://cpgmediagroup.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital-маркетинг — CPG Media Group",
    description:
      "SMM, таргетированная реклама, PR, брендинг и digital-стратегия. Комплексное продвижение бизнеса в интернете.",
    images: ["https://cpgmediagroup.com/og-image.png"],
  },
};

export default function DigitalLayout({ children }) {
  return children;
}
