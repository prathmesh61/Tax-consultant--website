const Hero: React.FC = () => {
  return (
    <section className="max-w-[1440px]  mx-auto ">
      <div className="flex flex-col gap-y-5 absolute right-40 top-60 px-6 py-2">
        <h3 className="text-white font-bold lg:text-3xl text-lg">
          WE'RE TAX CONSULTANT
        </h3>
        <div>
          <h1 className="text-white  font-extrabold lg:text-7xl text-3xl before:border-l-8  before:mr-3 before:border-brand">
            Help You To
          </h1>
          <h1 className="text-white  font-extrabold lg:text-7xl text-3xl before:border-l-8  before:mr-3 before:border-brand">
            Manage Your Tax
          </h1>
        </div>
        <p className="text-white font-medium text-xs max-w-[458px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="w-[200px] h-[40px] bg-brand cursor-pointer rounded-md">
          Contact Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
