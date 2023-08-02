import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Navbar() {
  const navigate = useNavigate();
  return (
    <NavWrap>
      <h1 onClick={() => navigate("/")}>MIOGY</h1>
      <Link to="/" className="menuLink">
        Main
      </Link>
      <Link to="/about" className="menuLink">
        About
      </Link>
      <Link to="/textile_design" className="menuLink">
        Textile Design
      </Link>
    </NavWrap>
  );
}

export default Navbar;

const NavWrap = styled.nav`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  .menuLink {
    font-size: 24px;
    font-weight: 700;
    list-style: none;
    text-decoration: none;
    color: #000;
  }
`;
