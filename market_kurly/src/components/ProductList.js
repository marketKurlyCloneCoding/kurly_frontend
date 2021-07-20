import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

import banner from "../pages/banner.jpg";

const ProductList = (props) => {
  return (
    <React.Fragment>
      <Banner>
        <img src={banner} />
      </Banner>
      <Grid>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </Grid>
    </React.Fragment>
  );
};
const Banner = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;

const Grid = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0px 29px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 308px);
  grid-column-gap: 28px;
  align-items: center;
`;

export default ProductList;
