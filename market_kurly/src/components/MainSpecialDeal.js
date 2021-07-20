import React, { useEffect } from "react";
import styled from "styled-components";
import { actionCreators as productActions } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";

const MainSpecialDeal = (props) => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.product.Speciallist);
  useEffect(() => {
    dispatch(productActions.getSpecialDealProductAPI());
  }, []);
  console.log(datas);
  return (
    <Container>
      <TitleContainer>
        <Title>특가/혜택</Title>
      </TitleContainer>
      <Wrap>
        <ProductContainer>
          {datas.map((data) => {
            return (
              <ImageContainer key={data.id}>
                <Image src={data.img} />
                <InfoContainer>
                  <Name>{data.title}</Name>
                  <Desc>{data.subTitle}</Desc>
                </InfoContainer>
              </ImageContainer>
            );
          })}
        </ProductContainer>
      </Wrap>
    </Container>
  );
};

const Desc = styled.span`
  padding-top: 8px;
  display: block;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 20px;
  color: #999;
`;

const Name = styled.span`
  max-height: 54px;
  margin-top: 17px;
  text-align: center;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.3px;
`;

const InfoContainer = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  float: left;
  width: 338px;
  margin-right: 18px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Wrap = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  width: 1068px;
  height: 538px;
  overflow: hidden;
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

const Container = styled.div`
  background-color: #f7f7f7;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export default MainSpecialDeal;
