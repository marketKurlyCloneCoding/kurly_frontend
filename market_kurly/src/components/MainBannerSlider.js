import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainBannerSlider = (props) => {
  let settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>사진1</h3>
          </div>
          <div>
            <h3>사진2</h3>
          </div>
          <div>
            <h3>사진3</h3>
          </div>
          <div>
            <h3>사진4</h3>
          </div>
          <div>
            <h3>사진5</h3>
          </div>
          <div>
            <h3>사진6</h3>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default MainBannerSlider;
