import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/textile_design">Textile Design</Link>
    </nav>
  );
}

export default Navbar;
