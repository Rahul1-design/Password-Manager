import { useEffect, useState } from "react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState(() => {
    let passwords = localStorage.getItem("passwords");
    return passwords ? JSON.parse(passwords) : [];
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    setPasswordArray((prev) => {
      const updated = [...prev, form];
      localStorage.setItem("passwords", JSON.stringify(updated));
      return updated;
    });
    console.log(form);
  };
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
            onChange={handleChange}
            value={form.site}
            className="border-2 border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
            type="text"
            placeholder="Enter website URL"
            name="site"
            id=""
          />
          <div className="flex justify-between gap-8 w-full ">
            <input
              onChange={handleChange}
              value={form.username}
              className="border-2 flex-1 border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
              type="text"
              placeholder="Enter username"
              name="username"
              id=""
            />
            <div className="relative flex-1">
              <input
                onChange={handleChange}
                value={form.password}
                className="border-2  border-green-600 rounded-xl outline-0 focus:outline-green-500 focus:outline-2 bg-slate-800 text-white placeholder:text-gray-400 px-4 py-1 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                id=""
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer  pr-2 top-1.5 right-0"
              >
                {showPassword ? (
                  <img
                    className="h-6 invert brightness-0 "
                    src="/openeye.png"
                    alt="close eye"
                  />
                ) : (
                  <img
                    className="h-6 invert "
                    src="/eye-password-hide.svg"
                    alt="open eye"
                  />
                )}
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="group bg-gray-800 rounded-xl w-1/2 h-8 flex gap-3 cursor-pointer lg:h-10 items-center justify-center hover:bg-gray-600 transition-colors duration-500 font-semibold  mx-auto text-center"
          >
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
