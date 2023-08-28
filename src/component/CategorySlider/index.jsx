import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SliderContainer } from "./style";
import CategoryCard from "../Category";
// import { Carousel } from "antd";
// import next from "../../Assets/image/nextArrow.png";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  classname: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

const CategorySlider = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res?.data || []);
      });
  }, []);
  console.log(data);
  return (
    <SliderContainer>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
      ;
    </SliderContainer>
  );
};

export default CategorySlider;

// export default class CenterMode extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Center Mode</h2>
//       </div>
//     );
//   }
// }
