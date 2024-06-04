import React, { useState } from "react";
import "../App.css";
import Navigasi from "../Components/Navbar/Navigasi";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function LandingPage() {

    // State untuk mengontrol tampilan jawaban
    const [showAnswer, setShowAnswer] = useState({});

    // Fungsi untuk menampilkan jawaban
    const toggleAnswer = (id) => {
        setShowAnswer({ ...showAnswer, [id]: !showAnswer[id] });
    };

    const faqList = [
        {
            id: 1,
            question: "Apa saja paket layanan yang tersedia di WeddingGram?",
            answer: "WeddingGram menawarkan empat paket layanan: Favorite, Exclusive, Glamour, dan Gold (Cinematic Wedding Clip dan Aerial Photography)."
        },
        {
            id: 2,
            question: "Apa perbedaan antara setiap paket?",
            answer: "Setiap paket memiliki perbedaan dalam jumlah fotografer, videografer, crew, durasi kerja, jenis bonus, dan fitur tambahan seperti set studio mini dan prewedding studio."
        },
        {
            id: 3,
            question: "Berapa harga setiap paket layanan?",
            answer: "Harga paket layanan WeddingGram bervariasi, mulai dari Rp. 3.589.000 hingga Rp. 9.097.000."
        },
        {
            id: 4,
            question: "Apa yang termasuk dalam setiap paket?",
            answer: "Setiap paket termasuk layanan fotografi, videografi, DVD file master foto high resolution, DVD file video edit full acara (HD), serta bonus seperti album kolase dan foto cetak dengan bingkai."
        },
        {
            id: 5,
            question: "Bagaimana cara memesan layanan WeddingGram?",
            answer: "Anda dapat memesan layanan WeddingGram melalui situs web resmi atau dengan menghubungi tim layanan pelanggan mereka."
        }
    ];
    
    return (
        <>
            <Navigasi />
            {/* About-Us Start */}
            <section className="py-3">
                <Container>
                    <Row className="align-items-center justify-content-center my-5 mx-2">
                        <Col md={5} className="lh-lg">
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
            </section>
            {/* About-Us End */}
            {/* FAQ Start */}
            <section className="bg-color py-3">
                <Container>
                    <Row className="my-5 mx-2">
                        <Col md={5}>
                            <h2 className="FAQ-heading fw-bold text-light my-3">Frequently Asked Questions</h2>
                            <p className="FAQ-description text-light text-justify my-4">Temukan beragam jawaban untuk pertanyaan umum yang mungkin Anda miliki mengenai layanan kami, dan dapatkan pemahaman mendalam tentang apa yang membuat WeddingGram menjadi pilihan utama dalam dokumentasi pernikahan Anda</p>
                        </Col>
                        <Col md={7} className="lh-lg px-2">
                            {faqList.map((faq) => (
                                <Card key={faq.id} className="mb-3">
                                    <Card.Header style={{ cursor: "pointer", backgroundColor: "#FFF7E6", color:"#D5A351" }} onClick={() => toggleAnswer(faq.id)}>
                                        {faq.question}
                                    </Card.Header>
                                    {showAnswer[faq.id] && (
                                        <Card.Body style={{ lineHeight: "1.8",  color:"#D5A351" }}>
                                            {faq.answer}
                                        </Card.Body>
                                    )}
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* FAQ End */}
        </>
    );
}

export default LandingPage;
