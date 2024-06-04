import React from "react";
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
          <p>Ingin Mengabadikan Semua Momen Istimewa Pernikahanmu? WeddingGram Solusinya!</p>
          <div className="align-items-center p-lg-3 d-flex">
            <Button variant="success">Get Started</Button>
            <h6 className="mx-2 my-3">OR</h6>
            <a href="#service">Explore</a>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} xs={12}>
          <img style={{ width: "70%" }} className="rounded-pill" src={LogoHero} alt="Wedding" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
