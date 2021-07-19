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
        position: "absolute",
        top: "44%",
        right: "360px",
        zIndex: 9998,
      }}
      onClick={onClick}
    >
      <img
        src="https://res.kurly.com/pc/service/main/1908/ico_next1_x1.png"
        alt=""
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "44%",
        left: "330px",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img
        src="https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png"
        alt=""
      />
    </div>
  );
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
  .slick-prev:before,
  .slick-next:before {
    content: none !important;
  }
  .slick-prev,
  .slick-next {
    opacity: 0;
  }
  :hover {
    & .slick-prev,
    .slick-next {
      opacity: 1;
      transform: translate(0, -50%);
      transition: opacity 600ms;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  height: 370px;
`;

const items = [
  {
    id: 1,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg",
  },
  {
    id: 2,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626322633.jpg",
  },
  {
    id: 3,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626261408.jpg",
  },
  {
    id: 4,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626419464.jpg",
  },
  {
    id: 5,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626260202.jpg",
  },
  {
    id: 6,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626420787.jpg",
  },
  {
    id: 7,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1626400824.jpg",
  },
  {
    id: 8,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1625623216.jpg",
  },
  {
    id: 9,
    url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1621561009.jpg",
  },
];

const MainBannerSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <ImageContainer key={item.id}>
                <Image src={item.url} />
              </ImageContainer>
            );
          })}
        </StyledSlider>
      </Wrap>
    </MainBannerWrap>
  );
};

const MainBannerWrap = styled.div`
  margin: 0px auto;
  max-width: 100%;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export default MainBannerSlider;
