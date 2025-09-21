import React from "react";

const logos = [
  { src: "image/imglogoBar/oracle.png", alt: "oracle" },
  { src: "image/imglogoBar/springBoot.png", alt: "springBoot" },
  { src: "image/imglogoBar/docker.png", alt: "docker" },
  { src: "image/imglogoBar/kubernetes.png", alt: "kubernetes" },
  { src: "image/imglogoBar/hibernate.png", alt: "hibernate" },
  { src: "image/imglogoBar/java.png", alt: "java" },
];

export default function BrandLogos() {
  return (
    <div className="py-10  dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-28 flex items-center justify-center gap-5 "
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-44 max-w-[95%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
