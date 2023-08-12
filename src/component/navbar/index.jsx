<<<<<<< HEAD
import React from "react";
import { Outlet } from "react-router-dom";
import "./design.css";
import { Container, Wrapper, Section } from "./style";
// import { Container, Wrapper, Section, Logo } from "./style";
import logoImg from "../../Assets/image/logo.png"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section><img src={logoImg} alt="" /></Section>
        <Section>2</Section>
        <Section>3</Section>
      </Wrapper>
      <Outlet />
    </Container>
    // ==========================================
    // <div className="container">
    //   <div className="wrapper">
    //     <div className="section">1</div>
    //     <div className="section">2</div>
    //     <div className="section">3</div>
    //   </div>
    //   <Outlet />
    // </div>
=======
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./design.css";
import navbar from "../../utils/navbar";
import {
  Container,
  Burger,
  Main,
  Section,
  Link,
  Wrapper,
  Buttons,
  BurgerMenu,
  Box,
  BurgerSection,
  Social,
  SocialIcon,
  Image
} from "./style";
import logoImg from "../../Assets/image/logo.png";
import Close from "../../Assets/image/Frame.png";
import NavBurger from "../../Assets/image/nav.png";
import Instagram from "../../Assets/image/instagramBurger.png";
import Linkedin from "../../Assets/image/linkedinBurger.png";
import Twitter from "../../Assets/image/twitterBurger.png";
import Facebook from "../../Assets/image/facebookBurger.png";
import UserLogin from "../../Assets/image/login.png";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Burger src={NavBurger} onClick={() => setDisplay(!display)} />
          {display && (
            <BurgerMenu className="BurgerMenu">
              <img
                src={Close}
                alt=""
                style={{ width: "24px", height: "24px" }}
                onClick={() => setDisplay(!display)}
              />
              <Box>
                <BurgerSection>
                  {navbar.map((value, index) => {
                    return (
                      <Link
                        className={({ isActive }) => isActive && "active"}
                        style={{
                          color: "var(--text-1, #0D263B)",
                          fontFamily: "Montserrat",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "28px",
                        }}
                        key={index}
                        to={value.path}
                      >
                        {value.title}
                      </Link>
                    );
                  })}
                </BurgerSection>
                <Social>
                  <SocialIcon id="greyIconBackWrap">
                    <img
                      id="greyIconBack"
                      className={({ isActive }) => isActive && "active"}
                      style={{ width: "12px", height: "20px" }}
                      src={Facebook}
                      alt=""
                    />
                  </SocialIcon>
                  <SocialIcon>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Twitter}
                      alt=""
                    />
                  </SocialIcon>
                  <SocialIcon>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Instagram}
                      alt=""
                    />
                  </SocialIcon>
                  <SocialIcon>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={Linkedin}
                      alt=""
                    />
                  </SocialIcon>
                </Social>
              </Box>
            </BurgerMenu>
          )}
          <Section
            onClick={() => {
              navigate("/home");
            }}
          >
            <img src={logoImg} alt="" />
          </Section>
          <Section id="noneDisplay">
            {navbar.map((value, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={value.path}
                >
                  {value.title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Buttons>Login</Buttons>
          </Section>
          <Image src={UserLogin} />
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
>>>>>>> 56e67ece83a5f4d682f26c89c443bd33c43bc36f
  );
};

export default Navbar;
