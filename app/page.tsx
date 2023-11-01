import Header from "@/components/base/Header";
import Hero from "@/components/base/Hero";
import heroBg from "@/public/hero.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen relative overflow-x-hidden">
        <Image alt="hero" src={heroBg} className="object-cover objext-center" />
        <div className="absolute top-0 w-full">
          <Header />
          <Hero />
        </div>
      </div>
    </main>
  );
}
