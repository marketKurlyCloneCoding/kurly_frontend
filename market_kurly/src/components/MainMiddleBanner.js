import React from "react";
import styled from "styled-components";

const MainMiddleBanner = (props) => {
  return (
    <ImageContainer>
      <Image
        src={"https://img-cf.kurly.com/shop/data/main/5/pc_img_1626318744.jpg"}
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: block;
  min-height: 140px;
  width: 1050px;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default MainMiddleBanner;
