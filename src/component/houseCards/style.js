import { styled } from "styled-components";

const Container = styled.div`
  width: 380px;
  height: 430px;
  border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff);
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  gap: 0px;
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
  border-top: 1px solid #E6E9EC; 
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 12px 20px;
`;

const Heart = styled.div`
  border-radius: 60px;
  background: var(--bg-1, #f6f8f9);
  width: 35px;
  height: 35px;
`;

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
  Heart
};
