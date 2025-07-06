import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import aboutImage from "../../assets/images/about/aboutimg.png";
import bgImage from "../../assets/images/about/bg.png";
import img7 from "../../assets/images/about/img7.jpg";
import bg1 from "../../assets/images/about/bg1.png";
import new1 from "../../assets/images/new/1.jpg";
import new2 from "../../assets/images/new/2.jpg";
import new3 from "../../assets/images/new/3.jpg";
import new4 from "../../assets/images/new/4.jpg";

const About = () => {
  return (
    <div className="about-page">
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
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
                  <i className="bi bi-compass"></i>
                </div>
                <h1>About JourneyJoy</h1>
                <p className="hero-subtitle">Crafting extraordinary travel experiences since 2010</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Happy Travelers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Destinations</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">13</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-content py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="12" className="mb-5 mb-lg-0">
              <div className="about-text">
                <div className="section-badge">
                  <span>Our Story</span>
                </div>
                <h2>Your Journey Begins Here</h2>
                <p className="lead-text">
                  JourneyJoy was born from a simple yet powerful belief: that everyone deserves to experience the magic of travel. Founded in 2010 by passionate travelers, we've grown from a small local agency to a trusted name in creating extraordinary travel experiences worldwide.
                </p>
                <p>
                  Our mission is to transform your travel dreams into reality. We don't just book trips; we craft personalized adventures that resonate with your soul. From the bustling streets of Tokyo to the serene beaches of Bali, from the historic wonders of Europe to the wild landscapes of Africa, we've helped over 10,000 travelers discover the world's most incredible destinations.
                </p>
                <p>
                  What sets JourneyJoy apart is our commitment to authentic experiences. We believe in connecting travelers with local cultures, hidden gems, and unforgettable moments that go beyond typical tourist attractions. Our expert team of travel curators works tirelessly to ensure every journey is filled with wonder, comfort, and memories that last a lifetime.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Personalized Travel Planning</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>24/7 Travel Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Local Expert Guides</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="about-image-container">
                <div className="about-image">
                  <img 
                    src={aboutImage}
                    alt="JourneyJoy Travel Experience" 
                    className="img-fluid"
                  />
                </div>
                <div className="experience-badge">
                  <div className="badge-content">
                    <span className="years">13</span>
                    <span className="text">Years of<br/>Excellence</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-section py-5 bg-light">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <h2>Our Team</h2>
                <p>Meet the passionate travel experts behind JourneyJoy</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <div className="team-card text-center">
                <div className="team-image mb-3">
                  <img src={new1} alt="Travel Expert" className="img-fluid" />
                </div>
                <h4>Sarah Johnson</h4>
                <p className="team-role">Travel Director</p>
                <p>15+ years of experience in creating unforgettable travel experiences</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="team-card text-center">
                <div className="team-image mb-3">
                  <img src={new2} alt="Travel Expert" className="img-fluid" />
                </div>
                <h4>Michael Chen</h4>
                <p className="team-role">Adventure Specialist</p>
                <p>Expert in crafting thrilling adventure tours and outdoor experiences</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="team-card text-center">
                <div className="team-image mb-3">
                  <img src={new3} alt="Travel Expert" className="img-fluid" />
                </div>
                <h4>Emma Rodriguez</h4>
                <p className="team-role">Cultural Guide</p>
                <p>Passionate about sharing authentic cultural experiences with travelers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values-section py-5 bg-light">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <h2>Our Values</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h4>Passion for Travel</h4>
                <p>We're passionate about creating meaningful travel experiences that inspire and delight.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Trust & Safety</h4>
                <p>Your safety and satisfaction are our top priorities on every journey.</p>
              </div>
            </Col>
            <Col md="4" className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon mb-3">
                  <i className="bi bi-star-fill"></i>
                </div>
                <h4>Excellence</h4>
                <p>We strive for excellence in every aspect of our service and travel experiences.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="image-gallery-section py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <h2>Our Journey</h2>
                <p>Capturing moments that inspire wanderlust</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="mb-4">
              <div className="gallery-image-container">
                <img 
                  src={new1}
                  alt="Adventure Travel" 
                  className="img-fluid gallery-image"
                />
                <div className="image-overlay">
                  <h4>Adventure Awaits</h4>
                  <p>Every journey is a new story waiting to be told</p>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-4">
              <div className="gallery-image-container">
                <img 
                  src={new2}
                  alt="Beautiful Destinations" 
                  className="img-fluid gallery-image"
                />
                <div className="image-overlay">
                  <h4>Discover Beauty</h4>
                  <p>Explore the world's most beautiful destinations</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="image-showcase py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-5">
                <h2>Travel Memories</h2>
                <p>Capturing the beauty of our destinations</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="3" className="mb-4">
              <div className="showcase-image">
                <img src={new4} alt="Travel Destination" className="img-fluid" />
                <div className="image-overlay">
                  <h5>Adventure</h5>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-4">
              <div className="showcase-image">
                <img src={new1} alt="Travel Destination" className="img-fluid" />
                <div className="image-overlay">
                  <h5>Culture</h5>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-4">
              <div className="showcase-image">
                <img src={new2} alt="Travel Destination" className="img-fluid" />
                <div className="image-overlay">
                  <h5>Nature</h5>
                </div>
              </div>
            </Col>
            <Col md="3" className="mb-4">
              <div className="showcase-image">
                <img src={new3} alt="Travel Destination" className="img-fluid" />
                <div className="image-overlay">
                  <h5>Experience</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section 
        className="cta-section py-5"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container>
          <Row className="text-center">
            <Col md="12">
              <h3 className="text-white mb-3">Ready to Start Your Adventure?</h3>
              <p className="text-white mb-4">Join us in creating unforgettable travel memories</p>
              <button className="btn btn-primary btn-lg cta-btn">
                Explore Our Tours
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 