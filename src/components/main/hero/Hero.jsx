import HeroProfile from "./details/heroProfile";
import HeroShowcase from "./details/heroShowcase";

export default function Hero() {
  return (
    <section
      className="relative w-full h-auto bg-cover bg-bottom mb-8
                 flex flex-col sm:flex-row items-center justify-around 
                  pb-24"
      style={{ backgroundImage: "url('/image/backgroundHeader.png')" }}
    >
      <HeroProfile />
      <HeroShowcase />
    </section>
  );
}
