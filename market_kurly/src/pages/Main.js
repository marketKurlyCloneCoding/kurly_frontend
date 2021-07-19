import React from "react";
import MainBannerSlider from "../components/MainBannerSlider";
import MainIsThisSlider from "../components/MainIsThisSlider";
import styled from "styled-components";
import Header from "../components/Header"


const Main = (props) => {
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
  console.log(title[0])
  return (
    <React.Fragment>
      <Header></Header>
      <MainBannerSlider />
      <MainIsThisSlider id={title[0].id} title={title[0].title} />
      <MainIsThisSlider id={title[1].id} title={title[1].title} />
    </React.Fragment>
  )
}



export default Main;