import HeroProfile from "./details/heroProfile";
import HeroShowcase from "./details/heroShowcase";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-bottom mb-80"
      style={{ backgroundImage: "url('/image/background.png')" }}
    >
      <div className="absolute inset-0 flex items-center justify-around z-10 ">
          <HeroProfile />
          <HeroShowcase />
        
      </div>
    </section>
  );
}