import React, { useEffect, useRef, useState } from "react";
import { SliderContainer, SliderIconWrap } from "./style";
import { Carousel } from "antd";
import next from "../../Assets/image/nextArrow.png";
import Category from "../Category";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

// const contentStyle = {
//   height: "571px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const Slider = () => {
  const sliderRef = useRef();

  const [data, setData] = useState([]);

const navigate = useNavigate()

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  console.log(url);
  // === function that will move cards of slider
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") sliderRef.current.next();
    if (name === "left") sliderRef.current.prev();
  };
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
      <SliderIconWrap data-name="right" onClick={onMove} left={"true"}>
        <img src={next} alt="" />
      </SliderIconWrap>

      <SliderIconWrap data-name="left" onClick={onMove} rotate="true" right={"true"}>
        <img src={next} alt="" />
      </SliderIconWrap>

      <Carousel ref={sliderRef} afterChange={onChange}>
        {data.map((value) => {
          return <Category onClick={()=>navigate(`./properties?category=${value?.name}`)} data={value} />;
        })}
      </Carousel>

      {/* <SliderContent>
        <TitleSection>
          <h1 className="bigTitle">Skyper Pool Partment</h1>
          <h1 className="subtitle" style={{ color: "#fff", fontWeight: "400" }}>
            112 Glenwood Ave Hyde Park, Boston, MA
          </h1>
        </TitleSection>
        <DetailsSection>
          <DataInnerSection>
            <img src={bed} alt="" />
            <h1
              className="subtitle"
              style={{ color: "#fff", fontWeight: "400" }}
            >
              4 beds
            </h1>
          </DataInnerSection>
          <DataInnerSection>
            <img src={Group} alt="" />
            <h1
              className="subtitle"
              style={{ color: "#fff", fontWeight: "400" }}
            >
              5 Baths
            </h1>
          </DataInnerSection>
          <DataInnerSection>
            <img src={car} alt="" />
            <h1
              className="subtitle"
              style={{ color: "#fff", fontWeight: "400" }}
            >
              1 Garage
            </h1>
          </DataInnerSection>
          <DataInnerSection>
            <img src={ruler} alt="" />
            <h1
              className="subtitle"
              style={{ color: "#fff", fontWeight: "400" }}
            >
              1200 Sq Ft
            </h1>
          </DataInnerSection>
        </DetailsSection>
        <h1
          className="title"
          style={{
            color: "#fff",
            letterSpacing: "-0.56px",
            marginBottom: "36px",
          }}
        >
          $5,250/mo
        </h1>
        <Button width="180px" type="darkmode" style={{ zIndex: "10000" }} Mediawidth>
          <p className="subtitle" style={{ color: "#fff", fontWeight: "400" }}>
            Read More
          </p>
        </Button>
      </SliderContent> */}
    </SliderContainer>
  );
};

export default Slider;
