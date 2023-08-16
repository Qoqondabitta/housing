import React from 'react'
import { SliderContainer, SliderIconWrap } from './style'
import { Carousel } from 'antd'

const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
}

const Slider = () => {
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
  return (
    <SliderContainer>
        <SliderIconWrap></SliderIconWrap>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </SliderContainer>
  );
}

export default Slider