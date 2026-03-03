export const metadata = {
  title: "Организация мероприятий — CPG Media Group",
  description:
    "Корпоративные мероприятия, форумы, тимбилдинги, праздники и культурные проекты. Организация событий любого масштаба от CPG Media Group.",
  alternates: {
    canonical: "https://cpgmediagroup.com/events",
  },
  openGraph: {
    title: "Организация мероприятий — CPG Media Group",
    description:
      "Корпоративные мероприятия, форумы, тимбилдинги, праздники и культурные проекты.",
    images: [{ url: "https://cpgmediagroup.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Организация мероприятий — CPG Media Group",
    description:
      "Корпоративные мероприятия, форумы, тимбилдинги, праздники и культурные проекты.",
    images: ["https://cpgmediagroup.com/og-image.png"],
  },
};

export default function EventsLayout({ children }) {
  return children;
}
