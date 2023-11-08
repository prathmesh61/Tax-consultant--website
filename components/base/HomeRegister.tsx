import secondHeroBg from "@/public/HeroImage.jpg";
import Image from "next/image";
import { ArrowBigDownDash, ArrowBigRightDash, Check } from "lucide-react";

const HomeRegister = () => {
  const list: string[] = [
    "Complete Solution",
    "Time saving process",
    "Expert team",
    "Deed preparation",
    " valuation of property & stamp duty",
    "Discounted legal charges",
  ];
  return (
    <div className="h-screen w-screen relative mt-20">
      <Image
        alt="secondHeroBg"
        src={secondHeroBg}
        className="object-cover object-center w-full h-full "
      />
      <div className="absolute top-0 bottom-0 left-0 w-[65%] bg-black opacity-60 blur-2xl" />
      <div className="flex flex-col gap-y-8 absolute left-5 lg:left-60 top-80 max-w-[1440px]  mx-auto ">
        <div className="w-full">
          <h2 className="text-white whitespace-nowrap  font-extrabold lg:text-5xl text-[16px]  before:border-l-8  before:mr-3 before:border-brand">
            Property Registration: Importance,
          </h2>
          <h2 className="text-white whitespace-nowrap   lg:text-5xl text-[16px]  font-extrabold before:border-l-8  before:mr-3 before:border-brand">
            Process, and Legal Requirements
          </h2>
        </div>
        <div>
          <p className="text-white font-medium text-sm lg:text-lg max-w-[458px] mb-4 flex items-center  gap-2">
            Why choose us? <ArrowBigDownDash className="w-5 h-5 text-brand" />
          </p>
          <ul className="grid grid-cols-2  lg:max-w-[60%] w-full gap-2">
            {list.map((item: string) => (
              <li
                key={item}
                className="text-[10px] lg:text-sm font-bold flex items-start gap-1 text-white"
              >
                <Check className="text-brand" size={20} />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#formLayout"
            className="w-[150px] h-[30px] lg:w-[250px] lg:h-[40px] bg-brand text-[10px] lg:text-sm cursor-pointer rounded-md flex items-center justify-center gap-2 mt-4"
          >
            Make Appointment <ArrowBigRightDash className="w-5 h-5 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeRegister;
