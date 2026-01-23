import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-2xl text-white">
      <div className="mycontainer flex items-center justify-between px-4 py-5 h-14">
        <div className="logo font-bold">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="font-semibold hover:font-bold" href="#">
              Home
            </a>
            <a className="font-semibold hover:font-bold" href="#">
              About
            </a>
            <a className="font-semibold hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
