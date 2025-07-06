import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./spainTours.css";
import bgImage from "../../assets/images/new/bg.jpg";
import parisImage from "../../assets/images/tour/paris.png";
import tokyoImage from "../../assets/images/tour/Tokyo.png";
import bangkokImage from "../../assets/images/tour/bangkok.png";
import cancunImage from "../../assets/images/tour/cancun.png";
import phuketImage from "../../assets/images/tour/phuket.png";
import baliImage from "../../assets/images/tour/bali-1.png";

const SpainTours = () => {
  const spainToursData = [
    {
      id: 1,
      title: "Barcelona Adventure",
      location: "Barcelona, Spain",
      duration: "5 Days",
      price: "$1,299",
      image: parisImage,
      rating: 4.9,
      description: "Explore the vibrant city of Barcelona with its stunning architecture and rich culture"
    },
    {
      id: 2,
      title: "Madrid Discovery",
      location: "Madrid, Spain",
      duration: "4 Days",
      price: "$1,099",
      image: tokyoImage,
      rating: 4.8,
      description: "Experience the heart of Spain with its royal palaces and world-class museums"
    },
    {
      id: 3,
      title: "Seville Cultural",
      location: "Seville, Spain",
      duration: "3 Days",
      price: "$899",
      image: bangkokImage,
      rating: 4.7,
      description: "Immerse yourself in Andalusian culture and flamenco traditions"
    },
    {
      id: 4,
      title: "Valencia Beach",
      location: "Valencia, Spain",
      duration: "6 Days",
      price: "$1,399",
      image: cancunImage,
      rating: 4.8,
      description: "Relax on Mediterranean beaches and explore the City of Arts and Sciences"
    },
    {
      id: 5,
      title: "Granada Alhambra",
      location: "Granada, Spain",
      duration: "4 Days",
      price: "$1,199",
      image: phuketImage,
      rating: 4.9,
      description: "Discover the stunning Alhambra palace and Moorish architecture"
    },
    {
      id: 6,
      title: "San Sebastian Gourmet",
      location: "San Sebastian, Spain",
      duration: "5 Days",
      price: "$1,599",
      image: baliImage,
      rating: 4.8,
      description: "Experience world-class cuisine and beautiful Basque Country landscapes"
    }
  ];

  return (
    <div className="spain-tours-page">
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
                  <i className="bi bi-flag"></i>
                </div>
                <h1>Spain Tours</h1>
                <p className="hero-subtitle">Discover the magic of Spain with our exclusive tour packages</p>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="bi bi-building"></i>
                    <span>Historic Cities</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-cup-hot"></i>
                    <span>Spanish Cuisine</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-sun"></i>
                    <span>Mediterranean</span>
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
                  <span>¡Olé!</span>
                </div>
                <h2>Spanish Adventures</h2>
                <p className="section-subtitle">From vibrant cities to stunning coastlines, explore the best of Spain</p>
              </div>
            </Col>
          </Row>
          
          <Row>
            {spainToursData.map((tour) => (
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
                      <Button variant="outline-primary" size="sm" className="book-btn">
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

      <section className="spain-info py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <div className="section-badge">
                  <span>Viva España</span>
                </div>
                <h2>Why Choose Spain?</h2>
                <p className="section-subtitle">Discover what makes Spain a must-visit destination</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h4>Rich History</h4>
                <p>From Roman ruins to Moorish palaces, Spain's history spans thousands of years.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-cup-hot"></i>
                </div>
                <h4>Amazing Cuisine</h4>
                <p>Experience world-renowned Spanish cuisine, from paella to tapas.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-sun"></i>
                </div>
                <h4>Perfect Climate</h4>
                <p>Enjoy Mediterranean weather with over 300 days of sunshine annually.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section py-5 text-white">
        <Container>
          <Row className="text-center">
            <Col md="12">
              <div className="cta-badge">
                <i className="bi bi-heart"></i>
              </div>
              <h3>Ready to Experience Spain?</h3>
              <p>Contact our Spain travel experts to plan your perfect Spanish adventure</p>
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

export default SpainTours; 