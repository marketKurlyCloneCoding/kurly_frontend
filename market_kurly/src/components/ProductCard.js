import React from "react";
import styled from "styled-components";

const ProductCard = (props) => {
  return (
    <React.Fragment>
      <ProductContainer>
        <ProductImgWrap>
          <img src="https://img-cf.kurly.com/shop/data/goods/153543279519l0.jpg" />
        </ProductImgWrap>
        <ProductTitle>[기획특가]친환경 감자 2kg</ProductTitle>
        <CostBox>
          <ProductDc>28%</ProductDc>
          <ProductPrice>4,990원</ProductPrice>
          <ProductOriginalPrice>6,990원</ProductOriginalPrice>
        </CostBox>
        <ProductSubTitle>근채류의 팔방미인</ProductSubTitle>
      </ProductContainer>
    </React.Fragment>
  );
};

const CostBox = styled.span`
  display: block;
  padding-top: 7px;
  font-size: 18px;
  line-height: 29px;
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const ProductDc = styled.span`
  font-weight: 800;
  color: #fa622f;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 29px;
  padding-right: 8px;
`;

const ProductOriginalPrice = styled.p`
  display: block;
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
  font-weight: 400;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const ProductPrice = styled.span`
  font-weight: 800;
  color: #333;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 29px;
`;

const ProductSubTitle = styled.p`
  display: block;
  padding-top: 8px;
  font-size: 13px;
  color: #999;
  line-height: 19px;
  font-weight: 400;
  margin: 0;
`;

const ProductTitle = styled.p`
  overflow: hidden;
  max-height: 58px;
  font-weight: 500;
  font-size: 20px;
  color: #333;
  line-height: 29px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  letter-spacing: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const ProductContainer = styled.div`
  height: 643px;
  cursor: pointer;
`;

const ProductImgWrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 308px;
  height: 396px;
  & img {
    width: 308px;
    height: 396px;
    margin: 0px;
    padding: 0px;
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
    &:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }
`;

export default ProductCard;
