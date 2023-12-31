import React, { useEffect, useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ExternalLinkButton from "../hook/ExternalLinkButton";
import { handleScrollToTop } from "../hook/ScrollToTop";
import { fontSize, fontWeight } from "../styles/style";

function Navbar() {
  const el = useRef();
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState(null);
  const path = process.env.PUBLIC_URL;

  const handleClose = (e) => {
    if (el.current !== e.target) {
      setDisplay(false);
    }
    // console.log(el.current, e.target);
  };

  useEffect(() => {
    // console.log(location.pathname, `${path}/about`);
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <NavWrap>
      <h1>
        <button
          type="button"
          ref={el}
          className="nav_menu"
          onClick={() => {
            setDisplay((prev) => !prev);
          }}
        >
          MENU
        </button>
        <button
          type="button"
          className="nav_menu"
          onClick={() => {
            window.location.reload();
            setTitle("Designer | Front-end");
            handleScrollToTop();
          }}
        >
          <p>MIOGY</p>
          <p>{title}</p>
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
          <ExternalLinkButton link={path} icon={"info"} />
        </div>
      </h1>
      {display && (
        <div className="menu_display">
          <Link
            to={path}
            className="menu_link"
            onClick={() => {
              setTitle("Designer | Front-end");
              handleScrollToTop();
            }}
          >
            HOME
          </Link>
          {/* <Link
            to="about"
            className="menu_link"
            onClick={() => {
              setTitle("ABOUT | CAREER");
              handleScrollToTop();
            }}
          >
            ABOUT
          </Link> */}

          <Link
            to="graphic"
            className="menu_link"
            onClick={() => {
              setTitle("GRAPHIC | TEXTILE & ARTWORK");
              handleScrollToTop();
            }}
          >
            GRAPHIC
          </Link>
          <Link
            to="develop"
            className="menu_link"
            onClick={() => {
              setTitle("DEVELOP | WEB & APP");
              handleScrollToTop();
            }}
          >
            DEVELOP
          </Link>
          {/* <Link
            to="archive"
            className="menu_link"
            onClick={() => {
              setTitle("ARCHIVE");
              handleScrollToTop();
            }}
          >
            ARCHIVE
          </Link>
          <Link
            to="wallpaper"
            className="menu_link"
            onClick={() => {
              setTitle("WALLPAPER");
              handleScrollToTop();
            }}
          >
            WALLPAPER
          </Link> */}

          <button
            className="menu_link close_btn"
            onClick={() => {
              setDisplay(false);
              handleScrollToTop();
            }}
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
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  background-color: #fff;
  z-index: 9999;
  h1 {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .nav_menu {
      font-size: 58px;
      font-weight: ${fontWeight.bold};
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
        font-size: ${fontSize.regular};
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
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.bold};
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
