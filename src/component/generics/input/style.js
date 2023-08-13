import { styled } from "styled-components";

const defineInputType = ({ type }) => {
  switch (type) {
  }
};

const ContainerInput = styled.input`
  /* width: 120px; */
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  outline: none;
  border: 1px solid #e6e9ec;
  /* ${defineInputType} */
`;
export { ContainerInput };
