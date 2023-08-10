import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Graphic() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText("");
  //   navigate(`/textile_design/${text}`);
  // };
  return (
    <GraphicWrap>
      <section>
        <p>🥶 준비중 입니다.</p>
        {/* Detail page test
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="textile id"
            value={text}
            onChange={handleChange}
          />
        </form> */}
      </section>
    </GraphicWrap>
  );
}

export default Graphic;

const GraphicWrap = styled.div`
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
