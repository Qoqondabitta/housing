import { styled } from "styled-components";

const defineInputType = ({ type }) => {
  switch (type) {
    case "filter":
      return {
        border: "none",
      };
      // case "dropdownFilter": return {
      //   padding: "12px 16px",
      //   border: "1px solid #e6e9ec",
        
      // };
    default:
      return {
        border: "1px solid #e6e9ec",
        padding: "12px 16px",
      };
  }
};

const ContainerInput = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  outline: none;
  ${defineInputType}
  @media screen and (max-width: 426px) {
padding: 8px 16px;
}
`;

export { ContainerInput };
