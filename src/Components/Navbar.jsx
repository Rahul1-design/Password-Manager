import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 ">
      <div className="logo">PassOp</div>
      <ul>
        <li>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
