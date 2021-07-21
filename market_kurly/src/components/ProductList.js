import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

import banner from "../pages/banner.jpg";

const ProductList = (props) => {
  const ProductCards = [1];
  return (
    <React.Fragment>
      <Banner>
        <img src={banner} style={{margin: "30px auto"}} />
      </Banner>
      <Grid>
        {/* {ProductCards.map((ProductCard)=>
        (

        ))}  */}
        <ProductCard />


      </Grid>
    </React.Fragment>
  );
};
const Banner = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  height: 353px;
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