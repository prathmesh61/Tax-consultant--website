import Header from "@/components/base/Header";
import Hero from "@/components/base/Hero";
import heroBg from "@/public/hero.jpg";
import mainBG from "@/public/Herobg.png";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen relative overflow-x-hidden">
        <Image
          alt="hero"
          src={mainBG}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute top-0 bottom-0 right-0 w-[55%] bg-black opacity-40 blur-xl" />
        <div className="absolute top-0 w-full z-10">
          <Header />
          <Hero />
        </div>
      </div>
    </main>
  );
}
