"use client";

import sectionRegistry from "./sections";

export default function LandingRenderer({ sections }) {
  return (
    <div className="overflow-hidden">
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.type];
        if (!Component) {
          console.warn(`Unknown section type: "${section.type}"`);
          return null;
        }
        return <Component key={`${section.type}-${index}`} {...section.props} />;
      })}
    </div>
  );
}
