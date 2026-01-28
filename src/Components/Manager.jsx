import { useState } from "react";

const Manager = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mycontainer ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span className="text-white">Pass</span>
          <span className="text-green-700">OP&gt;</span>
        </h1>
        <p className="text-green-700 text-xl text-center font-semibold">
          Your Own Password Manager
        </p>
        <div className="text-white gap-4 flex flex-col p-4">
          <input
            className="border-2 border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
            type="text"
            placeholder="Enter website URL"
            name=""
            id=""
          />
          <div className="flex justify-between gap-8 w-full ">
            <input
              className="border-2 flex-1 border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
              type="text"
              placeholder="Enter username"
              name=""
              id=""
            />
            <div className="relative">
              <input
                className="border-2 flex-1 border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
                type="password"
                placeholder="Enter password"
                name=""
                id=""
              />
              <span
                onClick={() => setClick(!click)}
                className="absolute cursor-pointer  pr-2 top-1.5 right-0"
              >
                {click ? (
                  <img
                    className="h-6 invert brightness-0 "
                    src="/eye-password-hide.svg"
                    alt="close eye"
                  />
                ) : (
                  <img
                    className="h-6 invert "
                    src="/openeye.png"
                    alt="open eye"
                  />
                )}
              </span>
            </div>
          </div>
          <button className="group bg-gray-800 rounded-xl w-1/2 h-8 flex gap-3 cursor-pointer lg:h-10 items-center justify-center hover:bg-gray-600 transition-colors duration-500 font-semibold  mx-auto text-center">
            <lord-icon
              src="https://cdn.lordicon.com/lzsupfwm.json"
              trigger="hover"
              className="group-hover:animate-bounce"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
