import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";
import Slider from "../components/Slider";
import ImageGallery from "../components/ImageGallery";

function Main() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <MainWrap>
      <div className="container slider_wrap">
        <section>
          <Slider />
          <Title>
            <h3>@WORK</h3>
          </Title>
          <ImageGallery />
        </section>
      </div>

      <Dummy>{/* <p>PORTFOLIO</p> */}</Dummy>
      <div className="container">
        <section>
          <Title>
            <p>story</p>
            <h3>ARCHIVE</h3>
          </Title>
          <div className="card_wrap">
            <div className="card">
              <span>NO.01</span>
              <img src={require("../assets/main02_01.jpg")} alt="archive01" />
            </div>
            <div className="card">
              <span>NO.02</span>
              <img src={require("../assets/main02_02.jpg")} alt="archive01" />
            </div>
            <div className="card">
              <span>NO.03</span>
              <img src={require("../assets/main02_03.jpg")} alt="archive01" />
            </div>
            <div className="card">
              <span>NO.04</span>
              <img src={require("../assets/main02_04.jpg")} alt="archive01" />
            </div>
          </div>
        </section>
        <div className="bottom_title">
          <button className="scroll_to_top" onClick={handleScrollToTop}>
            <p>
              <IoIosArrowUp size={28} />
            </p>
            <p>SCROLL TO TOP</p>
          </button>
          M<span>IOGY PORTFOLI</span>O
        </div>
      </div>
    </MainWrap>
  );
}

export default Main;

const MainWrap = styled.main`
  width: 100%;
  .slider_wrap {
    padding-top: 100px;
  }
  .container {
    background-color: #fff;
    section {
      padding-bottom: 180px;
      text-align: center;
      .card_wrap {
        display: flex;
        .card {
          width: 300px;
          border: 1px solid black;
          border-right: 0;
          text-align: start;
          span {
            display: inline-block;
            line-height: 60px;
            margin-left: 20px;
          }
          img {
            width: 100%;
          }
        }
        .card:last-child {
          border-right: 1px solid black;
        }
      }
    }
    .bottom_title {
      margin: 0;
      padding: 0;
      font-size: 250px;
      font-weight: 700;
      letter-spacing: -22px;
      span {
        font-weight: 100;
      }
      .scroll_to_top {
        position: absolute;
        bottom: 300px;
        left: 50%;
        transform: translateX(-50%);
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -1px;
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  .background:last-child {
    padding-top: 200px;
  }
`;

const Title = styled.div`
  padding-top: 120px;
  text-align: start;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
  }
`;

const Dummy = styled.div`
  width: 100%;
  height: 400px;
  /* border: 1px solid red; */
  background-color: rgba(0, 0, 0, 0);
  p {
    font-size: 9.8em;
    font-weight: 600;
    color: #000;
    text-align: center;
    align-items: center;
  }
`;
