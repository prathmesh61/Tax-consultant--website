import Footer from "@/components/base/Footer";
import FormLayout from "@/components/base/FormLayout";
import Header from "@/components/base/Header";
import Hero from "@/components/base/Hero";
import HomeRegister from "@/components/base/HomeRegister";
import ServiceLayout from "@/components/base/ServiceLayout";
import mainBG from "@/public/Herobg.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="h-screen w-screen relative ">
        <Image
          alt="hero"
          src={mainBG}
          className="object-cover object-center w-full h-full "
        />
        <div className="absolute top-0 bottom-0 right-0 w-[55%] bg-black opacity-50 blur-2xl" />
        <div className="absolute top-0 w-full z-10">
          <Header />
          <Hero />
        </div>
      </div>
      <FormLayout />
      <HomeRegister />
      <ServiceLayout />
      <Footer />
    </main>
  );
}
