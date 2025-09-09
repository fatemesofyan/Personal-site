import Image from "next/image";

export default function HeroProfile() {
  return (
    <div className="text-center mb-20">
      <div
        className="relative w-96 h-96"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      >
        <Image
          src="/image/pesonalImage.png"
          alt="pesonalImage"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-primaryText-heading-light dark:text-primaryText-heading-dark">رضا ذوقی</h1>
      <p className=" mt-2 text-primary text-lg font-bold">توسعه دهنده خلاق وب</p>
    </div>
  );
}
