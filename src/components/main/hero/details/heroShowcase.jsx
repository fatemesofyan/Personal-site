import Image from "next/image";

export default function HeroShowcase() {
  return (
    <div>
      <Image
        src="/image/codingImage.png"
        alt="codingImage"
        width={400}
        height={400}
      />
    </div>
  );
}
