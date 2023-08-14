import { styled } from "styled-components";

const Container = styled.div``;

const DropWrap = styled.div`
 position: absolute;
 right: 130px;
 top: 100%;
 display: flex;
  margin-top: 10px;
  border-radius: 2px;
  width: fit-content;
  padding-top: 30px;
  border: 1px solid black;
  flex-direction: column;
  gap: 20px;
`;

const DropSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 30px 0px 30px;
  width: 100%;
`;

const DropInputWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const DropFooterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  background: var(--bg-1, #f6f8f9);
  padding: 20px 30px 20px 30px;
`;

const DropSectionTitles = styled.h1`
`;

export {
  Container,
  DropWrap,
  DropSection,
  DropInputWrap,
  DropFooterWrap,
  DropSectionTitles,
};
