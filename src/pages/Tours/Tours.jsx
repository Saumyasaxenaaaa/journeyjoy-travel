import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./tours.css";
import bgImage from "../../assets/images/new/bg.jpg";
import baliImage from "../../assets/images/tour/bali-1.png";
import parisImage from "../../assets/images/tour/paris.png";
import tokyoImage from "../../assets/images/tour/Tokyo.png";
import bangkokImage from "../../assets/images/tour/bangkok.png";
import cancunImage from "../../assets/images/tour/cancun.png";
import phuketImage from "../../assets/images/tour/phuket.png";

const Tours = () => {
  const toursData = [
    {
      id: 1,
      title: "Bali Adventure",
      location: "Bali, Indonesia",
      duration: "7 Days",
      price: "$1,299",
      image: baliImage,
      rating: 4.8,
      description: "Explore the beautiful beaches and cultural sites of Bali"
    },
    {
      id: 2,
      title: "Paris Discovery",
      location: "Paris, France",
      duration: "5 Days",
      price: "$1,599",
      image: parisImage,
      rating: 4.9,
      description: "Experience the magic of the City of Light"
    },
    {
      id: 3,
      title: "Tokyo Explorer",
      location: "Tokyo, Japan",
      duration: "6 Days",
      price: "$1,799",
      image: tokyoImage,
      rating: 4.7,
      description: "Discover the perfect blend of tradition and modernity"
    },
    {
      id: 4,
      title: "Bangkok Cultural",
      location: "Bangkok, Thailand",
      duration: "4 Days",
      price: "$899",
      image: bangkokImage,
      rating: 4.6,
      description: "Immerse yourself in Thai culture and cuisine"
    },
    {
      id: 5,
      title: "Cancun Beach",
      location: "Cancun, Mexico",
      duration: "8 Days",
      price: "$1,399",
      image: cancunImage,
      rating: 4.8,
      description: "Relax on pristine beaches and explore Mayan ruins"
    },
    {
      id: 6,
      title: "Phuket Paradise",
      location: "Phuket, Thailand",
      duration: "6 Days",
      price: "$1,199",
      image: phuketImage,
      rating: 4.7,
      description: "Experience the ultimate beach getaway"
    }
  ];

  return (
    <div className="tours-page">
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-content text-center">
                <div className="hero-badge">
                  <i className="bi bi-airplane"></i>
                </div>
                <h1>Our Tour Packages</h1>
                <p className="hero-subtitle">Discover amazing destinations with our carefully curated tours</p>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="bi bi-globe"></i>
                    <span>Worldwide Destinations</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-shield-check"></i>
                    <span>Safe Travel</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-star"></i>
                    <span>Premium Experience</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="tours-content py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <div className="section-badge">
                  <span>Explore</span>
                </div>
                <h2>Available Tours</h2>
                <p className="section-subtitle">Choose from our selection of handpicked destinations</p>
              </div>
            </Col>
          </Row>
          
          <Row>
            {toursData.map((tour) => (
              <Col lg={4} md={6} className="mb-4" key={tour.id}>
                <Card className="tour-card h-100">
                  <div className="tour-image">
                    <Card.Img 
                      variant="top" 
                      src={tour.image} 
                      alt={tour.title}
                    />
                    <div className="tour-overlay">
                      <Button variant="primary" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <div className="tour-header">
                      <h5 className="tour-title">{tour.title}</h5>
                      <div className="tour-rating">
                        <span className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`bi bi-star${i < Math.floor(tour.rating) ? '-fill' : ''}`}
                            ></i>
                          ))}
                        </span>
                        <span className="rating-text">({tour.rating})</span>
                      </div>
                    </div>
                    <p className="tour-location">
                      <i className="bi bi-geo-alt"></i> {tour.location}
                    </p>
                    <p className="tour-duration">
                      <i className="bi bi-calendar"></i> {tour.duration}
                    </p>
                    <p className="tour-description">{tour.description}</p>
                    <div className="tour-footer">
                      <div className="tour-price">
                        <span className="price-label">From</span>
                        <span className="price-amount">{tour.price}</span>
                      </div>
                      <Button size="sm" className="book-btn">
                        Book Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col md="12">
              <h3>Ready to Start Your Adventure?</h3>
              <p>Contact our travel experts to customize your perfect trip</p>
              <Button variant="light" size="lg" className="cta-btn">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours; 