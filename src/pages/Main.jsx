import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";
import Slider from "../components/Slider";
import ImageGallery from "../components/ImageGallery";
import { handleScrollToTop } from "../hook/ScrollToTop";

function Main() {
  return (
    <MainWrap>
      <div className="container slider_wrap">
        <section>
          <Slider />
        </section>
      </div>

      <Dummy></Dummy>
      <div className="container">
        <section>
          <Title>
            <h3>@WORK</h3>
          </Title>
          <ImageGallery />
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
          <img
            src="https://github.com/miogy/cra_project/assets/99234582/f44f4c72-6976-4b16-b98f-6dc63c4dd171"
            alt="text"
          />
        </div>
        <div className="fixed_footer">
          <img
            src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="archive01"
          />
        </div>
      </div>
    </MainWrap>
  );
}

export default Main;

const MainWrap = styled.main`
  width: 100%;
  .container {
    background-color: #fff;
    section {
      padding-bottom: 100px;
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
      padding: 80px 0 0 0;
      font-size: 250px;
      font-weight: 700;
      letter-spacing: -22px;
      img {
        width: 100%;
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
      }
    }
    .fixed_footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      text-align: center;
      img {
        width: 60%;
        margin: 0 auto;
        padding-bottom: 100px;
      }
    }
  }
  .background:last-child {
    padding-top: 200px;
  }
  @media screen and (max-width: 1200px) and (min-width: 580px) {
    section {
      padding: 0 5%;
    }
    .container {
      section {
        padding-bottom: 100px;
      }
    }
    .bottom_title {
      display: none;
    }
    @media screen and (max-width: 1200px) and (min-width: 580px) {
      .fixed_footer {
        img {
          display: none;
        }
      }
    }
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
    font-size: 42px;
    font-weight: 400;
    line-height: 54px;
  }
  @media screen and (max-width: 1200px) and (min-width: 580px) {
    padding-top: 0;
  }
`;

const Dummy = styled.div`
  width: 100%;
  height: 600px;
  /* border: 1px solid red; */
  background-color: rgba(0, 0, 0, 0);
  @media screen and (max-width: 1200px) and (min-width: 580px) {
    height: 0;
  }
`;
