import Image from "next/image";
import girl from "@/public/girl.jpeg";
import men from "@/public/men.jpeg";
const ExperthLayout = () => {
  return (
    <section className="mt-20 py-2">
      <div className="max-w-[1440px] mx-auto px-6 py-2">
        <div className="flex flex-col justify-center items-center gap-y-8">
          <span className="text-brand font-bold">MEMBERS</span>
          <h2 className="text-black  font-extrabold lg:text-5xl text-2xl ">
            Meet Tax Advisor
          </h2>
          <hr className="w-36 h-2 bg-brand" />
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-y-3 relative ">
              <Image
                src={men}
                alt="experth"
                width={350}
                height={350}
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-24 flex flex-col justify-center items-center px-4 py-1 bg-white">
                <span className="text-xl font-bold ">David Morgan</span>
                <span className="text-sm ">Tax Adviso</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 relative">
              <Image
                src={girl}
                alt="experth"
                width={350}
                height={350}
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-24 flex flex-col justify-center items-center px-4 py-1 bg-white">
                <span className="text-xl font-bold ">Elissa Parker</span>
                <span className="text-sm">Financial Consultant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperthLayout;
