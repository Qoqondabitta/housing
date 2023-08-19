import { styled } from "styled-components";
import { ReactComponent as heart } from "../../Assets/icon/love.svg";
import { ReactComponent as resize } from "../../Assets/icon/resize.svg";

const Container = styled.div`
  width: 380px;
  margin: 0 auto;
  height: 430px;
  border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff);

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.06));

  @media screen and (max-width: 426px) {
    width: 343px;
    position: relative;
    top: -620px;
  }
`;

const CardImage = styled.img`
  width: 380px;
  height: 220px;

  @media screen and (max-width: 426px) {
    width: 343px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled(CardContent)`
  gap: 16px;
  padding: 24px 20px 16px 20px;
`;

const CardInfoTitle = styled(CardContent)`
  gap: 4px;
  justify-content: flex-start;
`;

const CardDetailsSection = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const IconCardWrap = styled(CardDetailsSection)`
  gap: 20px;
`;

const CardDataInnerSection = styled(CardContent)`
  gap: 0px;
  align-items: center;
  height: 47px;
`;

const CardPrice = styled.div`
  display: flex;
  border-top: 1px solid #e6e9ec;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 12px 20px;
`;

const Love = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  background: var(--bg-1, #f6f8f9);
  width: 35px;
  height: 35px;
`;

const Icons = styled.div``;

Icons.Heart = styled(heart)``;
Icons.Resize = styled(resize)``;

export {
  Container,
  CardImage,
  CardInfoTitle,
  CardContent,
  CardPrice,
  CardInfo,
  CardDetailsSection,
  IconCardWrap,
  CardDataInnerSection,
  Love,
  Icons,
};
