import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  // sticky Header 
  const isSticky = () => {
    const header = document.querySelector('.header-section');
    if (!header) return;
    
    const scrollTop = window.scrollY;
    if (scrollTop >= 100) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  };

  useEffect(() => {
    // Always start with transparent header on route change
    const header = document.querySelector('.header-section');
    if (header) {
      header.classList.remove('is-sticky');
    }
    
    // Add scroll listener
    window.addEventListener("scroll", isSticky);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [location.pathname]); // Re-run when route changes


 

  return (
    
    <header className="header-section">
      <Container>
       
          <Navbar expand="lg" className="p-0">
            {/* Logo Section  */}
            <Navbar.Brand>
              <NavLink to="/"> JourneyJoy</NavLink>
            </Navbar.Brand>
            {/* End Logo Section  */}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              {/*mobile Logo Section  */}
              <Offcanvas.Header>
                <h1 className="logo">JourneyJoy</h1>
                <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/*end mobile Logo Section  */}

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/" >
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/about" >
                    ABOUT US
                  </NavLink>
                  <NavLink className="nav-link" to="/tours" >
                    TOURS
                  </NavLink>

                  <NavDropdown
                    title="DESTINATION"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item as={NavLink} to="/spain-tours">
                      SPAIN TOURS
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/gallery" >
                    GALLERY
                  </NavLink>
                  <NavLink className="nav-link" to="/contact" >
                    CONTACT
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
              <NavLink className="primaryBtn d-none d-sm-inline-block">
                Book Now
              </NavLink>
              <div className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
              </div>
            </div>
          </Navbar>
    
      </Container>
    </header>
  );
};

export default Header;
