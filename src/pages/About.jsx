import React from "react";
import { styled } from "styled-components";

function About() {
  return (
    <AboutWrap>
      <section>
        <p>🤗 준비중 입니다.</p>
      </section>
    </AboutWrap>
  );
}

export default About;

const AboutWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px 0;
  background-color: #fff;
  section {
    text-align: center;
    p {
      font-size: 100px;
      font-weight: 600;
    }
  }
`;
