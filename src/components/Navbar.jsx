import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Navbar() {
  const navigate = useNavigate();
  const el = useRef();
  const [display, setDisplay] = useState(false);

  const handleClose = (e) => {
    if (el.current !== e.target) {
      setDisplay(false);
    }
    console.log(el.current, e.target);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });
  return (
    <NavWrap>
      <h1 onClick={() => navigate("/")}>
        <button
          ref={el}
          className="nav_menu"
          onClick={() => {
            setDisplay((prev) => !prev);
          }}
        >
          MENU
        </button>
        <button className="nav_menu" onClick={() => navigate("/")}>
          MIOGY
        </button>
        <div className="my_info">
          <button className="nav_menu">sns</button>
          <button className="nav_menu">sns</button>
          <button className="nav_menu">info</button>
        </div>
      </h1>
      {display && (
        <div className="menu_display">
          <Link to="/about" className="menu_link">
            ABOUT
          </Link>

          <Link to="/graphic" className="menu_link">
            GRAPHIC
          </Link>
          <Link to="/develop" className="menu_link">
            DEVELOP
          </Link>
          <Link to="/archive" className="menu_link">
            ARCHIVE
          </Link>
          <Link to="/wallpaper" className="menu_link">
            WALLPAPER
          </Link>
          <button
            className="menu_link close_btn"
            onClick={() => setDisplay(false)}
          >
            CLOSE
          </button>
        </div>
      )}
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
  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .nav_menu {
      font-size: 48px;
      font-weight: 800;
      font-family: "Gerstner Programm FSL", "Noto Sans KR", sans-serif;
      -webkit-font-smoothing: antialiased;
      border: 0;
      background-color: rgba(0, 0, 0, 0);
    }
    .my_info {
      display: flex;
    }
  }
  .menu_display {
    width: 100%;
    padding: 80px 0 80px 40px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.1);
  }
  .menu_link {
    display: inline-block;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    list-style: none;
    text-decoration: none;
    color: #000;
  }
  .close_btn {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    text-align: start;
    padding: 0;
    padding-top: 80px;
  }
`;
