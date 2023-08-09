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
      <div className="background top_boxshadow">
        <section>
          <Slider />
        </section>
        <Title>
          <h3>@WORK</h3>
        </Title>
        <ImageGallery />
      </div>

      <Dummy>
        <p>PORTFOLIO</p>
      </Dummy>
      <div className="background">
        <Title>
          <p>story</p>
          <h3>ARCHIVE</h3>
        </Title>
        <Cardwrap>
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
          <div className="card">
            <span>NO.05</span>
            <img src={require("../assets/main03_02.jpg")} alt="archive01" />
          </div>
        </Cardwrap>

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
  .background {
    background-color: #fff;
    section {
      padding-top: 30px;
      padding-bottom: 180px;
      text-align: center;
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
  width: 100%;
  padding: 0 5%;
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
    font-size: 300px;
    font-weight: 600;
    color: #000;
    text-align: center;
    align-items: center;
  }
`;

const Cardwrap = styled.div`
  width: 100%;
  /* height: 400px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 240px;
  .card {
    width: 300px;
    height: 400px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
    span {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
  .card:last-child {
    border-right: 0;
  }
`;
