import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "darkmode":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "lightmode":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#e6e9ec",
      };
    default:
      // return { background: `#061df`, border: "none", color: "#fff", padding: "12px 40px" };
      return { background: `blue`, border: "none", color: "#fff", padding: "12px 40px" };
  }
};

const ContainerButton = styled.button`
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { ContainerButton };
