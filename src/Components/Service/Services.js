import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import picture1 from "../../Asset/picture 1.jpg";
import picture2 from "../../Asset/picture 2.jpg";
import picture3 from "../../Asset/picture 3.jpg";
import picture4 from "../../Asset/picture 4.jpg";

function Services() {
  const [visibleTexts, setVisibleTexts] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const toggleText = (cardKey) => {
    setVisibleTexts((prevState) => ({
      ...prevState,
      [cardKey]: !prevState[cardKey],
    }));
  };

  return (
    <div id="card">
      <Container>
        <h3>Layanan Kami</h3>
        <Row>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={picture1} />
              <Card.Body style={{ backgroundColor: "white" }}>
                <Card.Title style={{ backgroundColor: "white" }}>Paket Wedding FAVORITE</Card.Title>
                {visibleTexts.card1 && (
                  <Card.Text>
                    <h6>Rp. 4.097.000 – Rp. 3.589.000</h6>
                    <ul>
                      <li>1 Fotografer</li>
                      <li>1 Videografer</li>
                      <li>Maks 12 Jam Kerja</li>
                      <li>DVD File Master Foto High Resolution (Softcopy Semua File)</li>
                      <li>DVD File Video Edit Full Acara (HD)</li>
                      <li>1 Album Kolase 20×30 (20 Halaman)</li>
                      <li>( Bonus 1 Foto Cetak 60×40 cm + Bingkai Minimalis )</li>
                    </ul>
                  </Card.Text>
                )}
                <Button id="detail" onClick={() => toggleText("card1")}>
                  {visibleTexts.card1 ? "Hide details" : "Show details"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={picture2} />
              <Card.Body style={{ backgroundColor: "white" }}>
                <Card.Title style={{ backgroundColor: "white" }}>Paket Wedding EXCLUSIVE</Card.Title>
                {visibleTexts.card2 && (
                  <Card.Text>
                    <h6>Rp. 5.097.000 – Rp. 4.449.000</h6>
                    <ul>
                      <li>2 Fotografe</li>
                      <li>1 Videografer</li>
                      <li>1 Crew</li>
                      <li>Maks 12 Jam Kerja</li>
                      <li>Set Studio Mini di Lokasi Wedding</li>
                      <li>DVD File Master Foto High Resolution (Softcopy Semua File)</li>
                      <li> File Video Edit Full Acara (HD)</li>
                      <li>1 Album Kolase 20×30 (20 Halaman)</li>
                      <li>( Bonus 1 Foto Cetak 40×60 cm + Bingkai Minimalis )</li>
                    </ul>
                  </Card.Text>
                )}
                <Button id="detail" onClick={() => toggleText("card2")}>
                  {visibleTexts.card2 ? "Hide details" : "Show details"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={picture4} />
              <Card.Body style={{ backgroundColor: "white" }}>
                <Card.Title style={{ backgroundColor: "white" }}>Paket Wedding GLAMOUR</Card.Title>
                {visibleTexts.card3 && (
                  <Card.Text>
                    <h6>Rp. 6.097.000 – Rp. 5.559.000</h6>
                    <ul>
                      <li>2 Fotografer dan 2 Videografer (1 Crew)</li>
                      <li>Set Studio Mini di Lokasi Wedding</li>
                      <li>DVD File Master Foto High Resolution</li>
                      <li>DVD File Video Edit Full Acara (HD)</li>
                      <li>1 Album Kolase 20×30 (20 Halaman)</li>
                      <li>( Bonus 2 Foto Cetak 12R + Bingkai )</li>
                    </ul>
                  </Card.Text>
                )}
                <Button id="detail" onClick={() => toggleText("card3")}>
                  {visibleTexts.card3 ? "Hide details" : "Show details"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingBottom: "50px" }}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={picture3} />
              <Card.Body style={{ backgroundColor: "white" }}>
                <Card.Title style={{ backgroundColor: "white" }}>Paket Wedding GOLD (CINEMATIC WEDDING CLIP dan AERIAL PHOTOGRAPHY)</Card.Title>
                {visibleTexts.card4 && (
                  <Card.Text>
                    <h6>Rp. 9.097.000 – Rp. 8.799.000</h6>
                    <ul>
                      <li>2 Fotografer dan 2 Videografer (1 Crew)</li>
                      <li>Gratis Prewedding Studio</li>
                      <li>Set Studio Mini di Lokasi Wedding</li>
                      <li>Cinematic Video Highlight</li>
                      <li>DVD File Master Foto High Resolution</li>
                      <li>DVD File Video Edit Full Acara (HD)</li>
                      <li>1 Album Kolase 20×30 (20 Halaman)</li>
                      <li>( Bonus 2 Foto Cetak 40×60 cm + Bingkai Minimalis )</li>
                    </ul>
                  </Card.Text>
                )}
                <Button id="detail" onClick={() => toggleText("card4")}>
                  {visibleTexts.card4 ? "Hide details" : "Show details"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
