import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import img1 from "../assets/slide_img01.png";
import img2 from "../assets/main02_02.jpg";
import img3 from "../assets/main02_03.jpg";
import img4 from "../assets/slide_img02.png";
import img5 from "../assets/main02_01.jpg";
import img6 from "../assets/main02_04.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const TOTAL_SLIDES = 2;
  const images = useMemo(
    () => [
      img1,
      img5,
      img2,
      img3,
      img4,
      "https://user-images.githubusercontent.com/99234582/235703083-ef5526cb-cc41-4ec5-93f1-422043701072.jpeg",
      img6,
    ],
    []
  );

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === images.length - 2 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [images]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {images.map((img, i) => (
          <IMG src={img} key={i} />
        ))}
      </SliderContainer>
      <div className="btn_wrap">
        <Button onClick={prevSlide}>PREV</Button>|
        <Button onClick={nextSlide}>NEXT</Button>
      </div>
    </Container>
  );
}

export default Slider;

const IMG = styled.img`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  @media screen and (max-width: 1200px) and (min-width: 580px) {
    height: 100%;
    margin-bottom: 120px;
  }
`;
const Button = styled.button`
  border: 0;
  padding: 0;
  padding-top: 15px;
  margin: 6px 10px;
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: gray;
  }
`;
const SliderContainer = styled.div`
  width: 50%;
  display: flex;
`;
