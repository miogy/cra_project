import React, { useEffect, useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import ExternalLinkButton from "../hook/ExternalLinkButton";

function Navbar({ setIsVisible }) {
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
          type="button"
          ref={el}
          className="nav_menu"
          onClick={() => {
            setDisplay((prev) => !prev);
            setIsVisible(true);
          }}
        >
          MENU
        </button>
        <button
          type="button"
          className="nav_menu"
          onClick={() => navigate("/")}
        >
          <p>MIOGY</p>
          <p>Designer | Front-end</p>
        </button>
        <div className="my_info">
          <ExternalLinkButton
            link="https://www.instagram.com/mi_ogy"
            icon={<BsInstagram />}
          />
          <ExternalLinkButton
            link="https://github.com/miogy"
            icon={<FaGithubSquare />}
          />
          <ExternalLinkButton link="/" icon={"info"} />
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
  background-color: #fff;

  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .nav_menu {
      font-size: 58px;
      font-weight: 800;
      font-family: "Gerstner Programm FSL", "Noto Sans KR", sans-serif;
      -webkit-font-smoothing: antialiased;
      border: 0;
      background-color: rgba(0, 0, 0, 0);
      z-index: 5;
      p {
        padding-top: 28px;
        margin: 0;
      }
      p:last-child {
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 26px;
      }
    }
    .my_info {
      display: flex;
      z-index: 100;
    }
  }
  .menu_display {
    width: 100%;
    padding-top: 40px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .menu_link {
    margin-left: 40px;
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    list-style: none;
    text-decoration: none;
    color: #000;
  }
  .menu_link:hover {
    color: lightgray;
  }
  .close_btn {
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    text-align: start;
    padding: 0;
    padding-top: 80px;
    margin-bottom: 80px;
  }
`;
