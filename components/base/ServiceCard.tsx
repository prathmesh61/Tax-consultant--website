import { services } from "@/utils/Services";
import React from "react";

const ServiceCard = () => {
  return (
    <>
      {services.map((service) => (
        <div
          key={service.name}
          className="flex flex-col gap-y-2 max-w-[300px] min-w-[300px] h-[200px] p-4 shadow-xl bg-white  transition-colors duration-400 rounded-md
              "
        >
          <service.icon className="w-8 h-8 text-brand" />
          <h3 className="text-xl font-extrabold ">{service.name}</h3>
          <p className="text-sm font-light whitespace-pre-wrap">
            {service.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
