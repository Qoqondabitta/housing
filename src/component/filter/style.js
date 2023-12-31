import { styled } from "styled-components";
import { ReactComponent as HouseIcon } from "../../Assets/icon/houseIcon.svg";
import { ReactComponent as AdvancedIcon } from "../../Assets/icon/advancedIcon.svg";
import { Select } from "antd";

const Container = styled.div``;

const PostContainer = styled.div`
  @media screen and (max-width: 426px) {
    padding: 0px 20px;
  }
`;

const SelectAntd = styled(Select)``;

const FilterWrap = styled.div`
  position: relative;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 2px;
  height: 64px;

  /* width: 100%; */
  max-width: 1440px;

  margin: auto;
  @media screen and (max-width: 426px) {
    padding: 24px;
    flex-direction: column;
    border: 1px solid #e6e9ec;
    height: fit-content;
    margin-top: 580px;
    /* position: absolute; */
    z-index: 10000;
    background: white;
    position: relative;
    top: -120px;
  }
`;

const FilterInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  border: 1px solid #e6e9ec;
  padding: 15px;
  width: 100%;
  @media screen and (max-width: 426px) {
    padding: 0px 0px 5px 0px;
    border-bottom: 1px solid #e6e9ec;
    width: 295px;
  }
`;

const FilterSelect = styled.select`
  width: 203px;
  border: none;
  padding: 12px 16px;
  border: 1px solid #e6e9ec;
  outline: none;
  /* width: ${({ width }) => (width ? `${width}px` : "100%")}; */
`;

const FilterOption = styled.option`
  /* width: ${({ width }) => (width ? `${width}px` : "100%")}; */
  outline: none;
  /* border: 1px solid #e6e9ec; */
  padding: 12px 16px;
  color: grey;
  line-height: 20px;

  /* background-color: rgb(218, 214, 214); */
  background: transparent;
  border: none;
  width: 203px;
`;

const FilterButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const IconsGenerics = styled.div``;

IconsGenerics.HouseIcon = styled(AdvancedIcon)`
  margin-right: 8px;
`;
IconsGenerics.AdvancedIcon = styled(HouseIcon)`
  margin-right: 8px;
`;

export {
  Container,
  PostContainer,
  FilterWrap,
  IconsGenerics,
  FilterButtonWrap,
  FilterInputWrap,
  FilterSelect,
  FilterOption,
  SelectAntd,
};
