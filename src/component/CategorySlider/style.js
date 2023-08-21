import { styled } from "styled-components";

const SliderContainer = styled.div`
  height: 571px;
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;

  display: flex;
  flex-direction: column;
  margin: auto;
  /* @media screen and (max-width: 426px) {
    top: -732px;
    height: 712px;
  } */
`;

const SliderIconWrap = styled.div`
  position: absolute;
  top: 50%;
  width: 45px;
  z-index: 10000;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  transform: ${({ rotate }) => (rotate ? "rotate(360deg)" : "rotate(180deg)")};
  left: ${({ left }) => !left && "32px"};
  right: ${({ left }) => left && "32px"};
  transition: all 2s;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  @media screen and (max-width: 426px) {
    display: none;
  }
`;

const SliderContent = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 426px) {
 justify-content: flex-start;
 padding-top: 92px;
}
`;

const SliderImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 571px;
  @media screen and (max-width: 426px) {
height: 712px;
}
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const DetailsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const DataInnerSection = styled(TitleSection)`
  gap: 0px;
  height: 47px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export {
  DetailsSection,
  SliderContainer,
  SliderIconWrap,
  SliderImage,
  DataInnerSection,
  Blur,
  TitleSection,
  SliderContent,
};
