import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { actionCreators as productActions } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "160px",
        right: "20px",
        zIndex: 9999,
      }}
      onClick={onClick}
    >
      <img
        src="https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1"
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
        top: "160px",
        left: "-30px",
        zIndex: 9996,
      }}
      onClick={onClick}
    >
      <img
        src="https://res.kurly.com/pc/service/main/1908/btn_prev_default.png?v=1"
        alt=""
      />
    </div>
  );
}

const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: 1050px;
    height: 506px;
  }
  .slick-slider {
    height: 506px;
  }
  /* .slick-track div {
    box-sizing: border-box;
    max-width: 249px !important;
    height: 506px;
    margin-right: 18px;
  } */
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    margin-right: 18px;
  }
  .slick-prev:before,
  .slick-next:before {
    content: none !important;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const TitleContainer = styled.div`
  padding: 79px 0px 35px 0px;
`;

const Title = styled.h3`
  margin: 0px;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.3px;
  text-align: center;
`;

const ProductContainer = styled.div`
  max-width: 1050px;
  height: 506px;
  margin: 0 auto;
`;

const ProductList = styled.div`
  width: 100%;
  /* overflow: hidden; */
  position: relative;
  height: 506px;
`;

const ImageContainer = styled.div`
  width: 249px;
  height: 320px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 249px;
  height: 320px;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;

const MainHotDeal = (props) => {
  const dispatch = useDispatch();
  const da = useSelector((state) => state.product);
  const datas = useSelector((state) => state.product.Hotlist);
  useEffect(() => {
    dispatch(productActions.getHotDealProductAPI());
  }, []);
  console.log(da);
  console.log(datas);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container id={props.id}>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ProductContainer>
        <ProductList>
          <StyledSlider {...settings}>
            {datas.map((data) => {
              if (data.dc === null) {
                return (
                  <>
                    <ImageContainer key={data.id}>
                      <Image src={data.img} />
                    </ImageContainer>
                    <InfoContainer>
                      <Name>{data.title}</Name>
                      <Price>{data.price + `원`}</Price>
                    </InfoContainer>
                  </>
                );
              }
              return (
                <>
                  <ImageContainer key={data.id}>
                    <Image src={data.img} />
                  </ImageContainer>
                  <InfoContainer>
                    <Name>{data.title}</Name>
                    <Price>
                      <Dc>{data.dc + `%`}</Dc>
                      {data.price + `원`}
                    </Price>
                    <Cost>{data.original_price + `원`} </Cost>
                  </InfoContainer>
                </>
              );
            })}
          </StyledSlider>
        </ProductList>
      </ProductContainer>
    </Container>
  );
};

const Cost = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 14px;
  color: #999;
  line-height: 18px;
  text-decoration: line-through;
`;

const Dc = styled.span`
  padding-right: 8px;
  font-weight: 800;
  font-size: 16px;
  color: #fa622f;
  line-height: 20px;
`;

const Price = styled.span`
  display: block;
  padding-top: 9px;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
`;

const Name = styled.span`
  display: block;
  overflow: hidden;
  max-height: 50px;
  margin-top: 12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 23px;
`;

const InfoContainer = styled.div``;

export default MainHotDeal;
