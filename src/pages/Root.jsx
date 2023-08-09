import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from "styled-components";

function Root() {
  return (
    <>
      <div className="wrap">
        <Navbar />
        <Outlet />
      </div>
      <Dummy></Dummy>
      <div className="fixed_footer">
        <BackgroundImg></BackgroundImg>
        <Footer />
      </div>
    </>
  );
}

export default Root;

// footer_dummy
const Dummy = styled.div`
  height: 140px;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 120px;
  /* background-color: #fcfcfc; */
  background: center / contain no-repeat
    url("https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80");
`;
