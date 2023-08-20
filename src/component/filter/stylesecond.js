import { styled } from "styled-components";

const Container = styled.div``;

const DropWrap = styled.div`
  position: absolute;
  z-index: 200000000;
  background: white;
  right: 130px;
  top: 100%;
  display: flex;
  margin-top: 10px;
  border-radius: 2px;
  width: fit-content;
  padding-top: 30px;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 426px) {
    width: 335px;
    right: 0px;
  }
`;

const DropSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 30px 0px 30px;
  width: 100%;
  @media screen and (max-width: 426px) {
    width: 325px;
    padding: 0px 5px;
  }
`;

const DropInputWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 426px) {
    flex-wrap: wrap;
  }
`;

const DropFooterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  background: var(--bg-1, #f6f8f9);
  padding: 20px 30px 20px 30px;
  @media screen and (max-width: 426px) {
    padding: 10px 5px;
    justify-content: center;
  }
`;

const DropSectionTitles = styled.h1``;

export {
  Container,
  DropWrap,
  DropSection,
  DropInputWrap,
  DropFooterWrap,
  DropSectionTitles,
};
