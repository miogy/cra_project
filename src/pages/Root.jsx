import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useCallback, useEffect, useState } from "react";

function Root() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  const location = useLocation();

  const listenToScroll = useCallback(() => {
    const path = process.env.PUBLIC_URL;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    // console.log(winScroll);
    if (winScroll < 900) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [setHeight, isVisible, setIsVisible]);
  useEffect(() => {
    const path = process.env.PUBLIC_URL;
    const desiredPath = path + "/graphic";
    if (location.pathname === desiredPath) {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }
  }, [listenToScroll, location.pathname]);

  return (
    <RootWrap>
      <div className="wrap">
        <Navbar />
        <Outlet />
      </div>
      <Dummy></Dummy>
      <div className="fixed_footer">{isVisible && <Footer />}</div>
    </RootWrap>
  );
}

export default Root;

const RootWrap = styled.div`
  .fixed_footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    z-index: -10;
    img {
      width: 90%;
      margin: 0 auto;
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
