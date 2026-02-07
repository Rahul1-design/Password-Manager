const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mycontainer flex items-center justify-between h-14">
        {/* LOGO */}
        <div className="logo font-bold text-2xl">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP&gt;</span>
        </div>

        {/* GITHUB BUTTON */}
        <a
          href="https://github.com/Rahul1-design"
          target="_blank"
          className="cursor-pointer font-semibold flex items-center gap-1 text-lg bg-green-700 px-3 py-1 rounded-xl hover:bg-green-900"
        >
          <img
            className="w-7 invert rounded-full"
            src="/github.png"
            alt="GitHub logo"
          />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
