import { ArrowBigRightDash } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1440px]  mx-auto ">
      <div className="flex flex-col gap-y-8 absolute right-14 lg:right-60 top-80 px-6 ">
        <h3 className="text-white font-bold lg:text-3xl text-lg">
          WE'RE TAX CONSULTANT
        </h3>
        <div className="w-full">
          <h1 className="text-white whitespace-nowrap  font-extrabold lg:text-7xl text-3xl before:border-l-8  before:mr-3 before:border-brand">
            Help You To
          </h1>
          <h1 className="text-white whitespace-nowrap  font-extrabold lg:text-7xl text-3xl before:border-l-8  before:mr-3 before:border-brand">
            Manage Your Tax
          </h1>
        </div>
        <p className="text-white font-medium text-sm max-w-[458px]">
          Our Experience expertise help you navigate complex tax matters and
          legal services efficiently.
        </p>

        <a
          href="#formLayout"
          className="w-[150px] h-[30px] lg:w-[250px] lg:h-[40px] bg-brand text-[10px] lg:text-sm cursor-pointer rounded-md flex items-center justify-center gap-2"
        >
          Make Appointment <ArrowBigRightDash className="w-5 h-5 " />
        </a>
      </div>
    </section>
  );
};

export default Hero;
