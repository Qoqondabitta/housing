import { styled } from "styled-components";
import { ReactComponent as HouseIcon } from "../../Assets/icon/houseIcon.svg";
import { ReactComponent as AdvancedIcon } from "../../Assets/icon/advancedIcon.svg";

const Container = styled.div``;

const FilterWrap = styled.div`
position: relative;
padding: 0px 130px;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 64px;
`;

const FilterInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  border: 1px solid #e6e9ec;
  padding: 15px;
  width: 100%;
`;

const FilterButtonWrap = styled.div`
display: flex;
gap: 20px;
`

const IconsGenerics = styled.div``;

IconsGenerics.HouseIcon = styled(AdvancedIcon)`
  margin-right: 8px;
`;
IconsGenerics.AdvancedIcon = styled(HouseIcon)`
  margin-right: 8px;
`;

export { Container, FilterWrap, IconsGenerics, FilterButtonWrap ,FilterInputWrap };
