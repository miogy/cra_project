import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import ExternalLinkButton from "../hook/ExternalLinkButton";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Root() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const path = process.env.PUBLIC_URL;

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Outlet />
      </div>

      <Dummy>
        <div className="footer_bottom">
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
        </div>
      </Dummy>
      <div className="fixed_footer">
        <BackgroundImg></BackgroundImg>
        <Footer />
      </div>
      {isVisible && (
        <TopBackground>
          <p>HELLO!! 👀</p>
        </TopBackground>
      )}
    </>
  );
}

export default Root;

// footer_dummy
const Dummy = styled.div`
  position: relative;
  height: 140px;
  .footer_bottom {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 120px;
  /* background-color: #fcfcfc; */
  background: center / contain no-repeat
    url("https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80");
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
