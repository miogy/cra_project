import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Tab from "../components/Tab";
import {
  borderBottom,
  fontSize,
  fontWeight,
  laptopContainer,
  palette,
} from "../styles/style";
import BottomTitle from "../ui/BottomTitle";
// import instaImg from "../assets/insta.png";

const TabContentsBox = styled.div`
  ${laptopContainer}
  ${borderBottom}
  .tab_category {
    padding-top: 80px;
    margin-bottom: 240px;
    z-index: 9999;
  }
`;

const AboutWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 100px 0;
  background-color: #fff;
  section {
    width: 800px;
    text-align: start;
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 360px;
  }
  p {
    width: 360px;
    text-align: start;
    span {
      width: 100%;
      font-size: ${fontSize.regular};
      font-weight: ${fontWeight.light};
      line-height: 38px;
      display: inline-block;
    }
  }
  h3 {
    border-bottom: 1px solid ${palette.border.gray};
  }
`;

const TextArea = styled.p`
  font-size: ${fontSize.small};
  line-height: 22px;
  strong {
    line-height: 38px;
  }

  .career {
    padding: 40px 10px 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${borderBottom}
    h4 {
      width: 40%;

      font-size: ${fontSize.regular};
    }
    p {
      width: 50%;
      margin-bottom: 20px;
    }
  }
`;
const CareerWrap = styled.div`
  max-width: 800px;
  h3 {
    height: 50px;
    margin: 0 0 30px 0;
    text-align: center;
    font-size: ${fontSize.medium};
    ${borderBottom}
  }
`;

function Career() {
  return (
    <CareerWrap>
      <h3>Graphic Design | Front End</h3>
      <TextArea>
        <div className="career">
          <h4>D'FRAME | 2023.05 ~ 2023.08</h4>
          <p>
            디자이너
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator, Figma, 카페24
            <br />
            <br />
            작가별 패키지 및 티셔츠 그래픽 디자인
            <br /> - 작가의 작품을 재해석하여 티셔츠 그래픽 디자인
            <br />
            <br />
            브랜드 패키지 디자인
            <br /> - 브랜드 패키지용 그래픽 디자인
            <br /> - 작가별 엽서등 기획 및 그래픽 작업
            <br />
            <br />
            브랜드 비지니스용 이미지 제작
            <br /> - 영업부 보조용 ppt 이미지 제작
            <br /> - 명함, 로고 디자인
            <br />
            <br />
            사이트 제작
            <br /> - 카페24(html,css)
            <br />
            <br />
          </p>
        </div>
        <div className="career">
          <h4>옴니스토리 | 2022.12 ~ 2023.05 </h4>
          <p>
            프론트 엔드팀 팀원
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator, Figma
            <br /> - React, styled-components, react-router-dom, react-helmet
            <br />
            <br />
            figma프로그램을 사용하여 UI/UX 디자인참여
            <br />
            <br />
            회사 서비스 리액트용 데모개발
            <br /> - 1:1 & 1:N 음성 서비스
            <br /> - 1:1 & 1:N 영상 서비스
            <br />
            <br />
            회사 사이트 전체 리뉴얼
            <br /> - 로그인, 회원가입, 어드민, 문서등 전체 페이지
          </p>
        </div>
        <div className="career">
          <h4>
            라이프실크 | 2018.10 ~ 2022.03
            <br />& 2015.01 ~ 2017.05
          </h4>
          <p>
            디자인팀 과장
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator
            <br />
            <br />
            브랜드 시즌별 아트웍 기획 및 개발
            <br /> - 브랜드 시즌별 아트웍 제안
            <br /> - 의뢰용 아트웍 개발
            <br /> - CAD도안수정 및 편집
            <br />
            <br /> - 퀄리티 향상, 담당 브랜드 그래픽부분 80% 오더 달성
            <br /> - 리오더율 증가
            <br />
            <br />
            LG oled 광고용 원단 디자인
            <br />
            <br />
            동대문 원단시장 DTP패턴 개발및 의뢰용 패턴 도안작업
            <br /> - 자제 디자인 개발 및 컬러웨이
            <br /> - 맵핑
            <br />
            <br />
            DTP컬러작업
            <br /> - 원단 배색및 조색
            <br /> - 생산관리및 기계관리
            <br />
            <br />
          </p>
        </div>
        <div className="career">
          <h4>(주)KSH | 2017.10 ~ 2018.10 </h4>
          <p>
            디자인팀 대리
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator
            <br />
            <br />
            독일 전시회
            <br /> - 뮌헨 텍스타일 전시 참여 아트워크 개발
            <br />
            <br />
            해외 영업용 디자인 개발
            <br /> - 시즌별 아트워크 개발 및 컬러웨이
            <br /> - 맵핑
          </p>
        </div>
        <div className="career">
          <h4>(주)HARRY FASHION | 2012.08 ~ 2014.08 </h4>
          <p>
            디자인팀 주임
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator
            <br />
            <br />
            DTP디자인개발
            <br /> - 의뢰용 도안 개발
            <br /> - 컬러배색 및 조색
            <br />
            <br />
            나염제도제판보조
            <br /> - 실크스크린 제도 보조
            <br /> - 맵핑
            <br />
            <br />
            영업보조
            <br /> - 브랜드 상담 및 공장 핸들링 보조
            <br />
            <br />
            전산업무
            <br /> - 업체마감 및 생산현황
          </p>
        </div>
        <div className="career">
          <h4>(주)한영나염 | 2011.06 ~ 2012.07 </h4>
          <p>
            DTP연구실 사원
            <br />
            <br />
            프로그램
            <br /> - Photoshop, Illustrator
            <br />
            <br />
            DTP디자인 수정
            <br /> - 의뢰용 도안 개발 및 수정
            <br />
            <br />
            컬러리스트
            <br /> - 원단별 조색 및 배색
            <br /> (면, 실크, 레이온, 폴리)
          </p>
        </div>
      </TextArea>
    </CareerWrap>
  );
}

function Container() {
  return (
    <>
      <Title>
        <img src={require("../assets/profile.png")} alt="profile" />
        <p>
          <strong>UI | Graphic Design & Web :</strong>
          <span>2023.05 ~ 2023.08</span>
          <strong>Front-End : </strong>
          <span>2022.12 ~ 2023.05</span>
          <strong>Apparel Graphic Design :</strong>
          <span> 2011.06 ~ 현재</span>
        </p>
      </Title>
      <TextArea>
        <strong>
          다양한 경험과 노하우를 갖춘 디자이너이자 프론트엔드 주니어
          양미옥입니다.
        </strong>
      </TextArea>
      <TextArea>
        "취미로 시작한 웹디자인, 프론트엔드가 되기까지"
        <br /> 디자이너의 단순한 호기심으로 도메인을 생성하여 사이트를
        만들어보고 하나의 서비스가 어떻게 만들어지는지 배우고 싶어 개발을
        시작하게 되었습니다.
        <br />
        <br /> 그래픽 디자이너로써 프로그램들을 이용하는 것과 별개로 여러 분야의
        프로그램들을 다루고 싶어 에프터이펙트(영상편집&모션 그래픽)부터 ADOBE
        XD(UI디자인&앱디자인)까지 공부하였습니다. 웹기획부터 워드프레스를
        이용하여 사이트도 제작해보았으나 직접 Figma로 기획부터 UI디자인을 하고
        웹&앱을 만들어보고자 개발을 시작하였습니다. 단순 디자인만 하는 것이 아닌
        하나의 서비스를 개발해보며 많은 것을 경험하고 배워나아가고 있습니다.
      </TextArea>
    </>
  );
}

function About(path) {
  const location = useLocation();
  const [tab, setTab] = useState(0);
  const category = ["Introduction", "Career", "SNS"];
  const tabContents = {
    0: <Container />,
    1: <Career />,
    // 2: <SNS />,
  };
  useEffect(() => {
    if (location.pathname === `${path + "about"}`) {
      console.log("about");
    }
  }, [location.pathname, path]);
  return (
    <AboutWrap>
      <section>
        <TabContentsBox>
          {tabContents[tab]}
          <div className="tab_category">
            <Tab category={category} setTab={setTab} tab={tab} />
          </div>
        </TabContentsBox>
      </section>
      <div>
        <BottomTitle />
      </div>
    </AboutWrap>
  );
}

export default About;
