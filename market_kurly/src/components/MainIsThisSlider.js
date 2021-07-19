import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-track div {
    max-width: 1050px;
    height: 506px;
  }
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    height: 506px;
    width: 249px;
    margin-right: 18px;
    overflow: visible;
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
  width: 1050px;
  height: 506px;
  margin: 0 auto;
`;

// 그 뒤로 position: relative
const ProductList = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 506px;
`;

const items = [
  {
    id: 1,
    url: "https://img-cf.kurly.com/shop/data/goods/1593592173804l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 2,
    url: "https://img-cf.kurly.com/shop/data/goods/1572590631750l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 3,
    url: "https://img-cf.kurly.com/shop/data/goods/1498728876917l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 4,
    url: "https://img-cf.kurly.com/shop/data/goods/1623999643376l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 5,
    url: "https://img-cf.kurly.com/shop/data/goods/1498094462978l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 6,
    url: "https://img-cf.kurly.com/shop/data/goods/1508220691321l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 7,
    url: "https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 8,
    url: "https://img-cf.kurly.com/shop/data/goods/1527832020304l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 9,
    url: "https://img-cf.kurly.com/shop/data/goods/157792889589l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
  {
    id: 10,
    url: "https://img-cf.kurly.com/shop/data/goods/1497429997949l0.jpg",
    name: "[존쿡 델리미트] 바베큐 백립 450g (냉동)",
    dc: "16",
    dc_price: "12,600",
    price: "15,000",
  },
];

const ImageContainer = styled.div`
  width: 249px;
  margin-right: 18px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const MainIsThisSlider = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(props.title);
  console.log(props);
  return (
    <Container id={props.id}>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ProductContainer>
        <ProductList>
          <StyledSlider {...settings}>
            {items.map((item) => {
              return (
                <ImageContainer key={item.id}>
                  <Image src={item.url} />
                  <InfoContainer>
                    <Name>{item.name}</Name>
                    <Price>
                      <Dc>{item.dc + `%`}</Dc>
                      {item.dc_price + `원`}
                    </Price>
                    <Cost>{item.price + `원`} </Cost>
                  </InfoContainer>
                </ImageContainer>
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

export default MainIsThisSlider;
