import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const MainBannerSlider = (props) => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <MainBannerWrap>
      <Wrap>
        <Slider {...settings}>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626322633.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626261408.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626419464.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626260202.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626420787.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626400824.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1625623216.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-cf.kurly.com/shop/data/main/1/pc_img_1621561009.jpg"
              }
            />
          </div>
        </Slider>
      </Wrap>
    </MainBannerWrap>
  );
};

const MainBannerWrap = styled.div`
  margin: 0px auto;
  max-width: 100%;
`;

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 370px;
  text-align: center;
  position: relative;
  margin: 5% auto;
  & .slick-next {
    right: 250px;
    z-index: 9998;
  }
  & .slick-prev {
    left: 250px;
    z-index: 9999;
  }
  & :hover {
    & .slick-prev:before {
      opacity: 0.75; // 기존에 숨어있던 화살표 버튼이 보이게
      color: #6b6b6b81;
      min-width: 50px;
      max-width: 200px;
      font-size: 50px;
    }
    & .slick-next:before {
      opacity: 0.75;
      color: #6b6b6b81;
      min-width: 50px;
      max-width: 200px;
      font-size: 50px;
    }
  }
  & .slick-prev:before {
    opacity: 0; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
  }
  & .slick-next:before {
    opacity: 0;
    color: black;
  }
`;

export default MainBannerSlider;
