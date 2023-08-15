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
        padding: "12px 16px",
        border: "1px solid #e6e9ec",
        color: "color: var(--text-1, #0D263B);",
      };
    case "cancelMode":
      return {
        background: "#fff",
        padding: "12px 16px",
        border: "1px solid black",
        color: "color: var(--text-1, #0D263B);",
      };
    case "bluemode":
      return {
        background: `var(--color-1, #0061DF)`,
        border: "none",
        color: "#fff",
        padding: "12px 40px",
      };
    default:
      // return { background: `#061df`, border: "none", color: "#fff", padding: "12px 40px" };
      return {
        background: `var(--color-1, #0061DF)`,
        border: "none",
        color: "#fff",
        padding: "12px 40px",
      };
  }
};

const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
  @media screen and (max-width: 426px) {
    width: 137px;
  }
`;

export { ContainerButton };
