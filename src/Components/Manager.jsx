const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mycontainer bg-slate-500 ">
        <h1 className="">PassOp</h1>
        <p>Your Own Password Manager</p>
        <div className="text-white flex flex-col p-4">
          <input className="border-2 border-black" type="text" name="" id="" />
          <div className="flex">
            <input
              className="border-2 border-black"
              type="text"
              name=""
              id=""
            />
            <input
              className="border-2 border-black"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
