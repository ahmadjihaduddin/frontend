import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  const customButtonStyleFooter = {
    backgroundColor: "#D5A351",
    width: "100%",
  };
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <div style={{ width: "100%" }}>
            <Row className="justify-content-space-between">
              <Col lg={8} md={6} sm={6}>
                <h3 className="text-left">Abuot US</h3>
                <p className="text-left" style={{ maxWidth: "60%" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe omnis at dolor vel cupiditate ducimus consequatur! Amet nobis, quo odio consectetur cumque quidem, magni adipisci optio mollitia ullam nemo?
                </p>
              </Col>
              <Col lg={2} md={3} sm={3} className="text-left">
                <h3>Our Product</h3>
                <ul className="list-unstyled">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </Col>
              <Col lg={2} md={3} sm={3} className="text-left">
                <h3>Our SNS</h3>
                <ul className="list-unstyled">
                  <li>Item A</li>
                  <li>Item B</li>
                  <li>Item C</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
      <Navbar style={customButtonStyleFooter}>
        <Container>
          <Navbar.Text style={{ width: "100%", color: "black" }}>Copyright &copy; 2024 HelpU | Powered by Gamelab Indonesia | Capstone Project</Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
