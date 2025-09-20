import React from "react";

const logos = [
  { src: "/logos/amazon.png", alt: "Amazon" },
  { src: "/logos/google.png", alt: "Google" },
  { src: "/logos/microsoft.png", alt: "Microsoft" },
  { src: "/logos/apple.png", alt: "Apple" },
];

export default function BrandLogos() {
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-center text-lg font-bold mb-6 text-primaryText-heading-light dark:text-primaryText-heading-dark">
        همکاران ما
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-12 object-contain" />
        ))}
      </div>
    </div>
  );
}