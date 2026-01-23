const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mycontainer bg-slate-200 ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP&gt;</span>
        </h1>
        <p className="text-green-700 text-xl text-center font-semibold">
          Your Own Password Manager
        </p>
        <div className="text-white gap-4 flex flex-col p-4">
          <input
            className="border-3 border-green-600 rounded-xl outline-0 focus:outline-green-900 focus:outline-2 text-black px-4 py-1 w-full"
            type="text"
            name=""
            id=""
          />
          <div className="flex justify-between gap-8 w-full ">
            <input
              className="border-3 flex-1 border-green-600 rounded-xl outline-0 focus:outline-green-900 focus:outline-2 text-black px-4 py-1 w-full"
              type="text"
              name=""
              id=""
            />
            <input
              className="border-3 flex-1 border-green-600 rounded-xl outline-0 focus:outline-green-900 focus:outline-2 text-black px-4 py-1 w-full"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="bg-gray-800 rounded-xl w-1/2 h-8 flex cursor-pointer lg:h-10 items-center justify-center hover:bg-gray-600 transition:bg duration-500 font-semibold  mx-auto text-center">
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
