import { styled } from "styled-components";
import { ReactComponent as HouseIcon } from "../../Assets/icon/houseIcon.svg";
import { ReactComponent as AdvancedIcon } from "../../Assets/icon/advancedIcon.svg";

const Container = styled.div``;

const PostContainer = styled.div`
  @media screen and (max-width: 426px) {
    padding: 0px 20px;
  }
`;

const FilterWrap = styled.div`
  position: relative;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 2px;
  height: 64px;

  @media screen and (max-width: 426px) {
    padding: 24px;
    flex-direction: column;
    border: 1px solid #e6e9ec;
    height: fit-content;
    margin-top: 580px;
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
};
