import { services } from "@/utils/Services";
import React from "react";
const ServiceLayout = () => {
  return (
    <section className="mt-32 bg-[#184341] p-2">
      <div className="max-w-[1540px] mx-auto px-6 py-2">
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <span className="text-brand font-bold">OUR SERVICES</span>
          <h2 className="text-white  font-extrabold lg:text-5xl text-2xl ">
            What We Provide
          </h2>
          <hr className="w-36 h-2 bg-brand" />
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {services.map((service) => (
              <div
                className="flex flex-col gap-y-2 max-w-[300px] h-[200px] p-4 shadow-xl bg-white  transition-colors duration-400 
              "
              >
                <service.icon className="w-8 h-8 text-brand" />
                <h3 className="text-xl font-extrabold ">{service.name}</h3>
                <p className="text-sm font-light whitespace-pre-wrap">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;
