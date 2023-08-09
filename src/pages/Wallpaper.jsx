import React from "react";
import { styled } from "styled-components";

function Wallpaper() {
  return (
    <WallpaperWrap>
      <section>
        <p>
          WALLPAPER CAMPAIGN <br />
          준비중 👻
        </p>
      </section>
    </WallpaperWrap>
  );
}

export default Wallpaper;

const WallpaperWrap = styled.div`
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
