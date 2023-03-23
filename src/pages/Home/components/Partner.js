import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../../../assets/img/partner1.png";

const Partner = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-semibold">Our Partners</h1>
      <div className="my-10">
        <Slider
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1000}
          pauseOnFocus={false}
          pauseOnHover={false}
        >
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner1} className="w-[200px]" alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
