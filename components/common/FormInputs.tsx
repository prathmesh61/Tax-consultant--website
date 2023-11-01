const FormInputs: React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 bg-white shadow-lg p-4 ">
      <span className="text-brand uppercase font-medium text-sm">
        SEND A MESSAGE
      </span>
      <h2 className="text-black  font-extrabold lg:text-3xl text-xl">
        Request a call back
      </h2>
      <div className="flex flex-col gap-y-5 mt-4">
        <input
          type="text"
          name="name"
          className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
          placeholder="Your email"
        />
        <input
          type="number"
          name="number"
          className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
          placeholder="Your phone number"
        />
        <textarea
          rows={3}
          cols={3}
          name="text"
          className="w-full  p-4 border-none bg-gray-200  placeholder:text-gray-600"
          placeholder="Any question you have?"
        />
        <button className="w-[200px] h-[40px] bg-brand cursor-pointer rounded-md">
          We will reach you
        </button>
      </div>
    </div>
  );
};

export default FormInputs;
