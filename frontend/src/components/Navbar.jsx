/**
 * Navbar Component — BOTPILOT AI
 * Bootstrap-based responsive navbar with services dropdown and scroll effect.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import servicesData from '../data/servicesData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      variant="dark"
      className={`navbar-dark-custom py-2 ${scrolled ? 'scrolled' : ''}`}
      style={{ background: scrolled ? undefined : 'transparent' }}
    >
      <Container>
        {/* Logo */}
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 fw-bold fs-4">
          <span
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{ width: 38, height: 38, background: 'var(--bp-gradient)', fontSize: '1.1rem' }}
          >
            🤖
          </span>
          <span className="gradient-text">BOTPILOT AI</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-nav" />

        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>

            {/* Services Dropdown */}
            <NavDropdown title="We Offer" id="services-dropdown" menuVariant="dark">
              {servicesData.map((s) => (
                <NavDropdown.Item as={Link} to={`/services/${s.id}`} key={s.id}>
                  <i className={`${s.icon} me-2 text-info`}></i>
                  {s.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact Us</Nav.Link>

            <Link to="/contact" className="btn btn-bp ms-lg-3 px-4 py-2">
              Schedule a Meeting
            </Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
