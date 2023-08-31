import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextSliderWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 30%;
`;

const TextSlider = styled.div`
  margin: 0;
  padding: 0;
  height: 300px;
  display: flex;
  transition: transform 0.7s cubic-bezier(0.84, 0, 0.08, 0.99);
`;

const TextSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 64px;
    font-family: "Cinzel";
    font-weight: lighter;
    text-transform: uppercase;
    padding-left: 10%;
  }
`;

// const SliderControl = styled.div`
//   margin: 0;
//   position: absolute;
//   z-index: 2;
//   bottom: 4%;
//   left: 15%;
//   transform: translate(-50%, -50%);
//   display: flex;
// `;

// const Button = styled.button`
//   color: #fff;
//   background: none;
//   padding: 24px;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   font-size: 16px;
//   border-radius: 50%;
//   margin: 0.4em;
//   display: inline-block;
// `;

// const Blocks = styled.div`
//   position: relative;
// `;

// const Block = styled.div`
//   /* z-index: 1; */
//   position: fixed;
//   height: 600px;
//   background: #0f0f0f;
// `;

// const Overlay = styled.div`
//   z-index: 1;
//   position: fixed;
//   height: 600px;
//   width: 20%;
//   left: 5%;
//   background: rgba(0, 0, 0, 0.65);
// `;

const ImageSliderWrapper = styled.div`
  z-index: 0;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const ImageSlide = styled.div`
  height: 600px;
  margin: 0 auto;
  background-size: cover;
  background-position: 50% 50%;
`;

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const textSliderRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80",
    "https://images.unsplash.com/photo-1509679708047-e0e562d21e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1508215302842-8a015a452a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1537510929030-2ffb7888f379?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80",
    "https://images.unsplash.com/photo-1552793084-49132af00ff1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2953&q=80",
  ];

  useEffect(() => {
    const imageSliderInterval = setInterval(changeImageSlide, 2400);
    const textSliderInterval = setInterval(changeTextSlide, 2400);

    return () => {
      clearInterval(imageSliderInterval);
      clearInterval(textSliderInterval);
    };
  }, [activeSlide]);

  const changeImageSlide = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % 5);
  };

  const changeTextSlide = () => {
    textSliderRef.current.style.transform = `translateX(-${
      activeSlide * 100
    }%)`;
  };

  return (
    <Container>
      <Wrapper>
        <ImageSliderWrapper className="image-slider">
          <ImageSlide
            style={{ backgroundImage: `url(${imageUrls[activeSlide]})` }}
          />
        </ImageSliderWrapper>

        <TextSliderWrapper className="text-slider-wrapper">
          <TextSlider className="text-slider" ref={textSliderRef}>
            <TextSlide>
              <h1>
                A blessing for <br /> every skin.
              </h1>
            </TextSlide>
            <TextSlide>
              <h1>
                The perfect mix of <br /> old & new.
              </h1>
            </TextSlide>
            <TextSlide>
              <h1>
                A journey over borders <br /> & generations.
              </h1>
            </TextSlide>
            <TextSlide>
              <h1>
                Your are the <br /> stylist.
              </h1>
            </TextSlide>
            <TextSlide>
              <h1>
                To be on the <br /> forefront.
              </h1>
            </TextSlide>
          </TextSlider>
        </TextSliderWrapper>

        {/* <SliderControl className="slider-control">
          <div className="prev">
            <Button type="button"></Button>
          </div>
          <div className="next">
            <Button type="button"></Button>
          </div>
        </SliderControl> */}

        {/* <Blocks className="blocks">
          <Block className="block-1"></Block>
          <Block className="block-2"></Block>
          <Block className="block-3"></Block>
        </Blocks> */}

        {/* <Overlay className="overlay"></Overlay> */}
      </Wrapper>
    </Container>
  );
};

export default ImageSlider;
