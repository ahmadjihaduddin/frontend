import React from "react";
import "../../App.css";
import LogoHero from "../../Asset/picture 10.jpg";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <Container>
      <Row className="text-left my-3 justify-content-lg-between p-lg-4">
        <Col lg={8} className="align-content-center">
          <h2>WeddingGram</h2>
          <p className="font-weight-bold">Momen Spesial Anda, Abadi Bersama Kami</p>
          <p className="text-justify">Selamat datang di WeddingGram, sahabat setia Anda dalam mengabadikan momen indah pernikahan. Kami hadir untuk memastikan setiap detik kebahagiaan Anda terekam dengan sempurna. Dengan layanan fotografi dan videografi profesional, kami berkomitmen untuk menangkap setiap senyuman, air mata kebahagiaan, dan momen istimewa di hari pernikahan Anda.</p>
          <div className="align-items-center py-lg-3 d-flex">
            <Button variant="success">Get Started</Button>
            <h6 className="mx-2 my-3">OR</h6>
            <a href="#service">Explore</a>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
          <img style={{ width: "75%" }} className="rounded-pill" src={LogoHero} alt="Wedding" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
