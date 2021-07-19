import React from "react";
import MainBannerSlider from "../components/MainBannerSlider";
import styled from "styled-components";
import Header from "../components/Header"

const Main = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
        <MainBannerSlider/>
    </React.Fragment>
  )
}



export default Main;