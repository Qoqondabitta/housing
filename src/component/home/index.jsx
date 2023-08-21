import React from "react";
import Category from "../Category";
// import HouseCard from "../houseCards";
import Slider from "../slider";
import CategorySlider from "../CategorySlider"

const Properties = () => {
  return (
    <div className="container">
      <Slider />
      <CategorySlider />
      <Category />
    </div>
  );
};

export default Properties;
