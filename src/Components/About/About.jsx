import React from "react";
import "../../App.css";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-center text-left my-5 mx-2">
            <Col lg={5} md={12} sm={12} xs={12}>
                <h2 className="about-heading fw-bold my-3">About Us</h2>
                <p className="about-description text-justify my-4">
                    WeddingGram adalah penyedia dokumentasi terkhusus untuk memastikan momen-momen istimewa dalam pernikahan Anda tertangkap dengan sempurna. Dari fotografi hingga videografi, kami hadir untuk membuat kenangan Anda abadi.
                </p>
                <a href="#contact" className="py-2 fw-semibold">
                    <Button className="px-5 my-3" style={{ backgroundColor: "#D5A351", border: "none"}}>Contact Us</Button>
                </a>
            </Col>
            <Col lg={7}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={6}>
                        <Card>
                            <Card.Header className="text-center" style={{ backgroundColor: "#D5A351",  color:"#FFF"}}>Kualitas dan Profesionalisme</Card.Header>
                            <Card.Body style={{ lineHeight: "1.8" }}>Kami memiliki tim fotografer dan videografer berpengalaman siap mengabadikan momen penting dengan hasil berkualitas tinggi.</Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="my-3">
                            <Card.Header className="text-center" style={{ backgroundColor: "#D5A351",  color:"#FFF" }}>Beragam Pilihan Paket</Card.Header>
                            <Card.Body style={{ lineHeight: "1.8" }}>Kami menawarkan paket-paket yang bervariasi, mulai dari paket ekonomis hingga layanan lengkap dengan prewedding dan aerial photography.</Card.Body>
                        </Card>
                        <Card className="my-3">
                            <Card.Header className="text-center" style={{ backgroundColor: "#D5A351",  color:"#FFF" }}>Layanan Lengkap</Card.Header>
                            <Card.Body style={{ lineHeight: "1.8" }}>Setiap paket mencakup fasilitas seperti studio mini, album kolase, dan bonus cetakan foto dengan bingkai minimalis, memberikan nilai lebih untuk setiap pelanggan.</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>                            
    </div>
  )
}

export default About;
