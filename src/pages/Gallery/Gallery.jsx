import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./gallery.css";
import GalleryComponent from "../../components/Gallery/Gallery";
import bgImage from "../../assets/images/new/bg.jpg";

const Gallery = () => {
  return (
    <div className="gallery-page">
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
                  <i className="bi bi-camera"></i>
                </div>
                <h1>Photo Gallery</h1>
                <p className="hero-subtitle">Explore amazing destinations through our stunning photography</p>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="bi bi-camera-fill"></i>
                    <span>Professional Shots</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-globe"></i>
                    <span>Global Destinations</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-heart"></i>
                    <span>Travel Inspiration</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-content py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <div className="section-badge">
                  <span>Memories</span>
                </div>
                <h2>Travel Memories</h2>
                <p className="section-subtitle">Discover the beauty of our destinations through these captivating images</p>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col md="12">
              <div className="gallery-container">
                <GalleryComponent />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-info py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <div className="section-badge">
                  <span>Features</span>
                </div>
                <h2>Gallery Features</h2>
                <p className="section-subtitle">Discover what makes our photo gallery special</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-camera-fill"></i>
                </div>
                <h4>Professional Photography</h4>
                <p>All images are captured by professional photographers to showcase the true beauty of each destination.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-globe"></i>
                </div>
                <h4>Global Destinations</h4>
                <p>Explore diverse locations from tropical beaches to historic cities and natural wonders.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="info-card text-center">
                <div className="info-icon mb-3">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h4>Travel Inspiration</h4>
                <p>Let these images inspire your next adventure and help you choose your perfect destination.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Gallery; 