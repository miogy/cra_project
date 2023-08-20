import React, { useState } from "react";
import { styled } from "styled-components";

function ImageGallery() {
  const [hoveredKeyword, setHoveredKeyword] = useState("textile");

  const handleKeywordHover = (keyword) => {
    setHoveredKeyword(keyword);
  };
  return (
    <GalleryWrap>
      <ul>
        <li className="keyword_container">
          <button
            type="button"
            className="keyword_btn"
            onMouseEnter={() => handleKeywordHover("textile")}
          >
            #TEXTILE
          </button>
          <button
            type="button"
            className="keyword_btn"
            onMouseEnter={() => handleKeywordHover("collaboration")}
            onMouseLeave={() => handleKeywordHover("textile")}
          >
            #COLLABORATION
          </button>
          <button
            type="button"
            className="keyword_btn"
            onMouseEnter={() => handleKeywordHover("graphic")}
            onMouseLeave={() => handleKeywordHover("textile")}
          >
            #GRAPHIC
          </button>
          <button
            type="button"
            className="keyword_btn"
            onMouseEnter={() => handleKeywordHover("motion")}
            onMouseLeave={() => handleKeywordHover("textile")}
          >
            #MOTION
          </button>
          <button
            type="button"
            className="keyword_btn"
            onMouseEnter={() => handleKeywordHover("web")}
            onMouseLeave={() => handleKeywordHover("textile")}
          >
            #WEB
          </button>
        </li>
        <li className="hover_img_container">
          <div
            className="hover_view"
            style={{ display: hoveredKeyword === "textile" ? "block" : "none" }}
          >
            <img src={require("../assets/bedding_img.jpg")} alt="archive01" />
          </div>
          <div
            className="hover_view"
            style={{
              display: hoveredKeyword === "collaboration" ? "block" : "none",
            }}
          >
            <img src={require("../assets/card.jpg")} alt="archive01" />
          </div>
          <div
            className="hover_view"
            style={{ display: hoveredKeyword === "graphic" ? "block" : "none" }}
          >
            <img src={require("../assets/web_main.jpg")} alt="archive01" />
          </div>
          <div
            className="hover_view"
            style={{ display: hoveredKeyword === "motion" ? "block" : "none" }}
          >
            <img src={require("../assets/motion.jpg")} alt="archive01" />
          </div>
          <div
            className="hover_view"
            style={{ display: hoveredKeyword === "web" ? "block" : "none" }}
          >
            <img src={require("../assets/web.jpg")} alt="archive01" />
          </div>
        </li>
      </ul>
    </GalleryWrap>
  );
}

export default ImageGallery;

const GalleryWrap = styled.div`
  width: 100%;
  height: 600px;
  ul {
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    li {
      width: 60%;
      .keyword_btn {
        display: flex;
        flex-direction: column;
        font-size: 32px;
        font-weight: 600;
        line-height: 36px;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
      }
      .keyword_btn:hover {
        cursor: pointer;
        color: gray;
      }
      .hover_view {
        margin: 0;
        padding: 0;
        img {
          width: 100%;
        }
      }
    }
    .keyword_container {
      width: 20%;
      text-align: start;
    }
    .hover_img_container {
      width: 60;
    }
  }
`;
