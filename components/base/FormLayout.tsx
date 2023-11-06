"use client";
import { Check, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FormEventHandler } from "react";
import React, { useRef } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
const FormLayout: React.FC = () => {
  const form = useRef<any>();
  const list = [
    "Learn from customer feedback",
    "experience Knowledge",
    "24/7 customer support",
    "Customer satisfaction",
  ];
  console.log(form.current);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-2 relative mt-10">
      <div className="flex flex-wrap-reverse gap-20 lg:gap-0 relative">
        <div className=" w-full lg:w-2/3 flex justify-center flex-col gap-y-5 ">
          <h2 className="text-black  font-extrabold lg:text-5xl text-2xl ">
            We Will Provide Best Tax Service
            <br /> For Your Business.
          </h2>
          <hr className="w-24 h-2 bg-brand " />
          <p className="text-black font-medium text-sm lg:text-lg max-w-[458px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
          <ul className="grid grid-cols-2  lg:max-w-[60%] w-full gap-2">
            {list.map((item: string) => (
              <li
                key={item}
                className="text-sm font-bold flex items-center gap-1"
              >
                <Check fill="yellow" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/3 bg-white shadow-xl p-4 ">
          <span className="text-brand uppercase font-medium text-sm">
            SEND A MESSAGE
          </span>
          <h2 className="text-black font-extrabold lg:text-3xl text-xl">
            Request a call back
          </h2>
          <form
            ref={form}
            className="flex flex-col gap-y-5 mt-4"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="user_email"
              className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
              placeholder="Your email"
            />
            <input
              type="number"
              name="user_number"
              className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
              placeholder="Your phone number"
            />
            <textarea
              rows={3}
              cols={3}
              name="message"
              className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
              placeholder="Any question you have?"
            />
            <button
              type="submit"
              className="w-[250px] h-[40px] bg-brand cursor-pointer rounded-md flex items-center justify-center gap-1"
            >
              We will reach you <Send className="w-5 h-5 " />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormLayout;
