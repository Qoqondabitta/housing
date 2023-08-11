import React from "react";
import { Outlet } from "react-router-dom";
import "./design.css";
import { Container, Wrapper, Section } from "./style";
// import { Container, Wrapper, Section, Logo } from "./style";
import logoImg from "../../Assets/image/Vector.png"

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section>1</Section>
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
  );
};

export default Navbar;
