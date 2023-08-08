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
        <Footer />
      </div>
    </>
  );
}

export default Root;

const Dummy = styled.div`
  height: 120px;
`;
