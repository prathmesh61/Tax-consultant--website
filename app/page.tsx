import Footer from "@/components/base/Footer";
import FormLayout from "@/components/base/FormLayout";
import Header from "@/components/base/Header";
import Hero from "@/components/base/Hero";
import HomeRegister from "@/components/base/HomeRegister";
import ServiceLayout from "@/components/base/ServiceLayout";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="h-screen w-screen relative ">
        <div className="relative w-full h-full">
          <Image
            alt="hero"
            src="https://res.cloudinary.com/dpvjdarqx/image/upload/v1699507832/samples/people/cvtw4liftundjprxfn2k.jpg"
            className="object-cover object-center w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
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
