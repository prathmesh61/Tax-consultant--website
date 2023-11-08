import React from "react";
import ServiceCard from "./ServiceCard";
const ServiceLayout = () => {
  return (
    <section id="servicesLayout" className="mt-32 bg-[#184341] p-2">
      <div className="max-w-[1540px] mx-auto px-6 py-2">
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <span className="text-brand font-bold">OUR SERVICES</span>
          <h2 className="text-white  font-extrabold lg:text-5xl text-2xl ">
            What We Provide
          </h2>
          <hr className="w-36 h-2 bg-brand" />
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4 mb-4">
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;
