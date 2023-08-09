import React from "react";
import { styled } from "styled-components";

function Main() {
  return (
    <MainWrap>
      <div className="background">
        <section>Main</section>
      </div>

      <Dummy>
        <p>PORTFOLIO</p>
      </Dummy>
      <div className="background">down</div>
    </MainWrap>
  );
}

export default Main;

const MainWrap = styled.main`
  width: 100%;

  .background {
    height: 800px;
    background-color: #fff;
  }
`;

const Dummy = styled.div`
  width: 100%;
  height: 400px;
  /* border: 1px solid red; */
  background-color: rgba(0, 0, 0, 0);
  p {
    font-size: 300px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    align-items: center;
  }
`;
