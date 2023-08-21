import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Tab from "../components/Tab";

function About(path) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `${path + "about"}`) {
      console.log("about");
    }
  }, []);
  return (
    <AboutWrap>
      <section>
        <Title>
          <img src={require("../assets/profile.png")} alt="profile" />
          <p>
            <span>jjangrl87@gmail.com</span>
            <span>Develop : github</span>
            <span>Design : Portfolio</span>
            <span>Life : instagram</span>
            <span>Drawing | Photographic</span>
          </p>
        </Title>
        <p className="title">
          다양한 경험과 노하우를 갖춘 디자이너, 프론트엔드 주니어 양미옥입니다.
        </p>
        <p>
          "취미로 시작한 웹디자인, 프론트엔드가 되기까지"
          <br /> 디자이너의 단순한 호기심으로 도메인을 생성하여 사이트를
          만들어보고 하나의 서비스가 어떻게 운영이 되는지 배우고 싶어 개발을
          시작하게 되었습니다.
        </p>
        <div className="border"></div>
        <Tab />
        <h3>Design</h3>
        <h4>라이프실크 | 2018.10 ~ 2022.03 </h4>
        <p>
          브랜드 시즌별 아트웍 기획 및 개발 <br />
          클라이언트의 니즈에 맞춰 그래픽 수정 <br />
          - 퀄리티 향상에 의한 담당 브랜드 그래픽제품 80% 오더 달성 및 리오더율
          증가
          <br />
          - LG oled 광고용 원단 디자인
          <br />
        </p>
      </section>
    </AboutWrap>
  );
}

export default About;
const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
  img {
    width: 200px;
  }
  p {
    width: 300px;
    margin-left: 100px;
    text-align: start;
    span {
      width: 100%;
      line-height: 26px;
      display: inline-block;
    }
  }
`;
const AboutWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 80px 0;
  background-color: #fff;
  section {
    width: 800px;
    text-align: start;
    h3 {
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
    }
    .title {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .border {
    padding: 10px 0;
    margin-bottom: 120px;
    border-bottom: 1px solid #efefef;
  }
`;
