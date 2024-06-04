import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../../Asset/Logo.png";

const Navigasi = () => {
  const customButtonStyleNav = {
    backgroundColor: "#D5A351", // Menggunakan warna yang Anda inginkan
    borderColor: "white", // Sesuaikan jika diperlukan
    color: "black",
    width: "100px",
  };

  return (
    <Navbar expand="lg" bg="light" sticky="top">
      <Container className="justify-content-space-between">
        <Navbar.Brand href="#home">
          <img
            src={Logo} // Menggunakan logo yang telah diimpor
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt="WeddingGram Logo"
          />
          WeddingGram
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-lg-auto">
            <Nav.Link className="mr-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mr-4" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="mr-4" href="#service">
              Service
            </Nav.Link>
            <Nav.Link className="mr-4" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link className="mr-4 d-block d-lg-none" href="#login">
              login
            </Nav.Link>
            <Button style={customButtonStyleNav} href="#login" className="d-none d-lg-block">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
