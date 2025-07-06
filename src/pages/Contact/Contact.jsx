import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./contact.css";
import bgImage from "../../assets/images/new/bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
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
                  <i className="bi bi-headset"></i>
                </div>
                <h1>Get In Touch</h1>
                <p className="hero-subtitle">Ready to start your next adventure? Our travel experts are here to help you plan the perfect trip.</p>
                <div className="hero-features">
                  <div className="feature-item">
                    <i className="bi bi-clock"></i>
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-shield-check"></i>
                    <span>Secure Booking</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-award"></i>
                    <span>Expert Advice</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-content py-5">
        <Container>
          <Row>
            <Col lg={8} md={12} className="mb-5">
              <div className="contact-form-section">
                <h2>Send us a Message</h2>
                <p className="mb-4">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill me-2" style={{fontSize: '1.2rem'}}></i>
                      <span>Thank you for your message! We'll get back to you soon.</span>
                    </div>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-person me-2"></i>
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-envelope me-2"></i>
                          Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-telephone me-2"></i>
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-chat-text me-2"></i>
                          Subject *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this about?"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>
                      <i className="bi bi-pencil-square me-2"></i>
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" size="lg" className="submit-btn">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
            
            <Col lg={4} md={12}>
              <div className="contact-info-section">
                <h3>Get in Touch</h3>
                <p>We're here to help and answer any questions you might have.</p>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Address</h5>
                    <p>123 Travel Street<br />Adventure City, AC 12345<br />United States</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>info@journeyjoy.com<br />support@journeyjoy.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Business Hours</h5>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section py-5 bg-light">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center mb-4">
                <h3>Find Us</h3>
                <p>Visit our office or get in touch with us</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="map-placeholder">
                <div className="map-content">
                  <i className="bi bi-map"></i>
                  <h4>Interactive Map</h4>
                  <p>Map integration would go here</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact; 