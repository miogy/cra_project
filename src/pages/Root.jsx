import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useCallback, useEffect, useState } from "react";
// import ExternalLinkButton from "../hook/ExternalLinkButton";
// import { BsInstagram } from "react-icons/bs";
// import { FaGithubSquare } from "react-icons/fa";

function Root() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  // const path = process.env.PUBLIC_URL;

  const listenToScroll = useCallback(() => {
    let heightToHideFrom = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [setHeight, isVisible, setIsVisible]);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    <RootWrap>
      <div className="wrap">
        <Navbar />
        <Outlet />
      </div>

      <Dummy>
        {/* <div className="footer_bottom">
          <ExternalLinkButton
            components="footer"
            link="https://www.instagram.com/mi_ogy"
            icon={<BsInstagram />}
          />
          <ExternalLinkButton
            components="footer"
            link="https://github.com/miogy"
            icon={<FaGithubSquare />}
          />
          <ExternalLinkButton components="footer" link={path} icon={"info"} />
        </div> */}
      </Dummy>
      <div className="fixed_footer">
        {/* <img src={require("../assets/main03_02.jpg")} alt="archive01" /> */}
        <img
          src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="archive01"
        />
        <Footer />
      </div>
      {isVisible && (
        <TopBackground>
          <p>HELLO!! 👀</p>
        </TopBackground>
      )}
    </RootWrap>
  );
}

export default Root;

const RootWrap = styled.div`
  .fixed_footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: -10;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) and (min-width: 580px) {
    .fixed_footer {
      img {
        display: none;
      }
    }
  }
`;

// footer_dummy
const Dummy = styled.div`
  position: relative;
  height: 100px;
  .footer_bottom {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TopBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #000;
  text-align: center;
  p {
    margin: 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    color: #fff;
  }
`;
