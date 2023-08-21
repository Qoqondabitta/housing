import React, { useRef } from "react";
import { Blur, TitleSection, DetailsSection, SliderContainer, SliderContent, SliderIconWrap, SliderImage, DataInnerSection } from "./style";
import { Carousel } from "antd";
import {Button} from "../generics"
import next from "../../Assets/image/nextArrow.png";
import house1 from "../../Assets/image/house1.png"
import house2 from "../../Assets/image/house2.png"
import house3 from "../../Assets/image/house3.png"
import house4 from "../../Assets/image/house4.png"
import bed from "../../Assets/image/bed.png"
import car from "../../Assets/image/car.png"
import Group from "../../Assets/image/Group.png"
import ruler from "../../Assets/image/ruler.png";
import "./design.css"

// const contentStyle = {
//   height: "571px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const Slider = () => {
  const sliderRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  // === function that will move cards of slider
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") sliderRef.current.next();
    if (name === "left") sliderRef.current.prev();
  };
  return (
    <SliderContainer>
      <SliderIconWrap data-name="right" onClick={onMove} left={"true"}>
        <img src={next} alt="" />
      </SliderIconWrap>

      <SliderIconWrap data-name="left" onClick={onMove} rotate="true" right={"true"}>
        <img src={next} alt="" />
      </SliderIconWrap>

      <Carousel ref={sliderRef} afterChange={onChange}>
        <SliderImage src={house1} />
        <SliderImage src={house2} />
        <SliderImage src={house3} />
        <SliderImage src={house4} />
      </Carousel>
      <SliderContent>
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
      </SliderContent>
      <Blur />
    </SliderContainer>
  );
};

export default Slider;
