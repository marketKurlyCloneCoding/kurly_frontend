import React, { useEffect } from "react";
import styled from "styled-components";
import { actionCreators as productActions } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

import banner from "../pages/banner.jpg";

import { history } from "../redux/configureStore";

const ProductList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.match.url === "/category/vege/1") {
      dispatch(productActions.getProductCardAPI("inner=vege1"));
    } else if (props.match.url === "/category/vege/2") {
      dispatch(productActions.getProductCardAPI("inner=vege2"));
    } else if (props.match.url === "/category/vege/2") {
      dispatch(productActions.getProductCardAPI("inner=vege3"));
    } else if (props.match.url === "/category/vege3") {
      dispatch(productActions.getProductCardAPI("outer=vege"));
    }
    if (props.match.url === "/category/fruit/3") {
      dispatch(productActions.getProductCardAPI("inner=fruit3"));
    } else if (props.match.url === "/category/fruit/2") {
      dispatch(productActions.getProductCardAPI("inner=fruit2"));
    } else if (props.match.url === "/category/fruit/1") {
      dispatch(productActions.getProductCardAPI("inner=fruit1"));
    } else if (props.match.url === "/category/fruit") {
      dispatch(productActions.getProductCardAPI("outer=fruit"));
    }
    if (props.match.url === "/category/seafood/3") {
      dispatch(productActions.getProductCardAPI("inner=seafood3"));
    } else if (props.match.url === "/category/seafood/2") {
      dispatch(productActions.getProductCardAPI("inner=seafood2"));
    } else if (props.match.url === "/category/seafood/1") {
      dispatch(productActions.getProductCardAPI("inner=seafood1"));
    } else if (props.match.url === "/category/seafood") {
      dispatch(productActions.getProductCardAPI("outer=seafood"));
    }
  }, []);

  const datas = useSelector((state) => state.product.Cardlist);

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
