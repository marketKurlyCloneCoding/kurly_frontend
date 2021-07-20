import React from "react";
import MainBannerSlider from "../components/MainBannerSlider";
import styled from "styled-components";
import MainMiddleBanner from "../components/MainMiddleBanner";
import MainOfferDeal from "../components/MainOfferDeal";
import MainHotDeal from "../components/MainHotDeal";
import MainSpecialDeal from "../components/MainSpecialDeal";
const title = [
  {
    id: 0,
    title: "이 상품 어때요?"
  },
  {
    id: 1,
    title: "놓치면 후회할 가격"
  }
]

const Main = (props) => {

  return (
    <React.Fragment>
      <MainBannerSlider />
      <MainOfferDeal title={title[0].title} />
      <MainSpecialDeal/>
      <MainHotDeal title={title[1].title} />
      <MainMiddleBanner/>
    </React.Fragment>
  )
}



export default Main;