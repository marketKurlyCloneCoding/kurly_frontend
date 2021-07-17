import React from "react";
import MainBannerSlider from "../components/MainBannerSlider";
import styled from "styled-components";

const Main = (props) => {
  return (
    <React.Fragment>
      <MainBannerWrap>
        <MainBannerSlider/>
      </MainBannerWrap>
    </React.Fragment>
  )
}

const MainBannerWrap = styled.div`
  margin: 0px auto;
  max-width: 100%;
`;

export default Main;