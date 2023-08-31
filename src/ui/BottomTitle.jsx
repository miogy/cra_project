import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";
import { handleScrollToTop } from "../hook/ScrollToTop";

const BottomTitleWrap = styled.div`
  position: absolute;
  padding: 0;
  bottom: 0;
  margin: 0;
  img {
    width: 100%;
  }
  .scroll_to_top {
    height: 200px;
    text-align: center;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -1px;
  }
`;
function BottomTitle() {
  return (
    <BottomTitleWrap>
      <button className="scroll_to_top" onClick={handleScrollToTop}>
        <p>
          <IoIosArrowUp size={28} />
        </p>
        <p>SCROLL TO TOP</p>
      </button>
      <img
        src="https://github.com/miogy/cra_project/assets/99234582/f44f4c72-6976-4b16-b98f-6dc63c4dd171"
        alt="text"
      />
    </BottomTitleWrap>
  );
}

export default BottomTitle;
