import React from "react";
import Category from "../Category";
import HouseCard from "../houseCards";
import Slider from "../slider";

const Properties = () => {
  return (
    <div className="container">
      <Slider />
      <HouseCard />
      <Category />
    </div>
  );
};

export default Properties;
