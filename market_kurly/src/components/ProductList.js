import React, { useEffect } from "react";
import styled from "styled-components";
import { actionCreators as productActions } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "./ProductCard";

import banner from "../pages/banner.jpg";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.product.Cardlist);
  useEffect(() => {
    dispatch(productActions.getProductCardAPI());
  }, []);
  return (
    <React.Fragment>
      <Banner>
        <img src={banner} style={{ margin: "30px auto" }} />
      </Banner>
      <Grid>
        <ProductCard datas={datas} />
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
