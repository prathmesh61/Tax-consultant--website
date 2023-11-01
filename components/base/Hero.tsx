import { ArrowBigRightDash } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1440px]  mx-auto ">
      <div className="flex flex-col gap-y-8 absolute right-40 lg:right-60 top-80 px-6 ">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="w-[250px] h-[40px] bg-brand  cursor-pointer rounded-md flex items-center justify-center gap-2">
          Make Appointment <ArrowBigRightDash className="w-5 h-5 " />
        </button>
      </div>
    </section>
  );
};

export default Hero;
