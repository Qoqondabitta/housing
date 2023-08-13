import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 130px;
  height: 64px;
  max-width: 1440px;
  width: 100%;
  @media screen and (max-width: 426px) {
    padding: 0px 20px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .active {
    color: rgb(54, 240, 54);
  }
`;
const Logo = styled.img``;

const Buttons = styled.button`
  font-size: 14px;  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  background-color: var(--colorPrimary);
  color: #fff;
  border-radius: 2px;
  border: 1px solid #fff;
  cursor: pointer; 
  :active{
    opacity: 0.5;
  }
  @media screen and (max-width: 426px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0px 32px;
  color: #fff;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
  width: 100%;
`;

const Burger = styled.img`
  height: 16px;
  width: 20px;
  display: none;
  @media screen and (max-width: 426px) {
    display: flex;
  }
`;

const BurgerMenu = styled.div`
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
  position: absolute;
  z-index: 1000000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  width: 159px;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  position: relative;
  z-index: -200000000;
  padding: 10px 12px;
  width: 36px;
  height: 36px;
  border-radius: 3px;
`;

const BurgerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Image = styled.img`
  display: none;
  @media screen and (max-width: 426px) {
    display: flex;
  }
`;

export {
  Container,
  Image,
  Main,
  Box,
  Wrapper,
  Section,
  Social,
  SocialIcon,
  Logo,
  Burger,
  Buttons,
  Link,
  BurgerSection,
  BurgerMenu,
};
