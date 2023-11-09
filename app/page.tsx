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
        <Image
          alt="hero"
          src="https://res.cloudinary.com/dpvjdarqx/image/upload/v1699507832/samples/people/cvtw4liftundjprxfn2k.jpg"
          className="object-cover object-center w-full h-full "
          width={100}
          height={100}
        />
        <div className="absolute top-0 bottom-0 right-0 w-[60%] bg-black opacity-50 blur-2xl" />
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
