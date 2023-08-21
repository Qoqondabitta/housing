import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
`;

const CategoryImage = styled.img`
  width: 280px;
  border-radius: 3px;
  height: 380px;
`;

const CategoryWrap = styled.div`
  width: 280px;
  height: 380px;
  border-radius: 3px;

  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.5);
`;

const CategoryTitle = styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 28px;
`

export { Container, CategoryWrap, Blur, CategoryImage, CategoryTitle };
