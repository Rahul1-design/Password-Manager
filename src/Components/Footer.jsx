const Footer = () => {
  return (
    <footer className="bg-slate-900 w-full text-white ">
      <div className="mycontainer py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="font-bold text-lg">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP&gt;</span>
        </div>

        {/* Right side */}
        <div className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} PassOP — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
