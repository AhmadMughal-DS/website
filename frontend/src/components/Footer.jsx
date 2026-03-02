/**
 * Footer Component — BOTPILOT AI
 * Multi-column Bootstrap footer with brand, services, links, and socials.
 */
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bp-footer pt-5 pb-4">
      <hr className="bp-divider m-0 mb-5" />
      <Container>
        <Row className="g-4 mb-5">
          {/* Brand */}
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-3 fw-bold fs-5">
              <span
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{ width: 36, height: 36, background: 'var(--bp-gradient)', fontSize: '1rem' }}
              >🤖</span>
              <span className="gradient-text">BOTPILOT AI</span>
            </div>
            <p className="text-secondary small mb-3" style={{ maxWidth: 300 }}>
              Pakistan&apos;s premier digital &amp; AI solutions agency. We help businesses grow online with
              websites, chatbots, social media, ads &amp; creative design.
            </p>
            <div className="d-flex gap-2">
              {['github', 'linkedin', 'twitter', 'instagram'].map((s) => (
                <a key={s} href="#" className="btn btn-sm rounded-3 d-flex align-items-center justify-content-center"
                  style={{ width: 38, height: 38, background: 'rgba(255,255,255,.05)', border: '1px solid var(--bp-border)', color: '#b4bcd0' }}
                  aria-label={s}
                >
                  <i className={`bi bi-${s}`}></i>
                </a>
              ))}
            </div>
          </Col>

          {/* Services */}
          <Col sm={6} lg={3}>
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ letterSpacing: 1 }}>Services</h6>
            <ul className="list-unstyled small">
              {[
                ['website-development', 'Website Development'],
                ['ai-chatbot-automation', 'AI Chatbot & Automation'],
                ['social-media-management', 'Social Media Management'],
                ['google-meta-ads', 'Google & Meta Ads'],
                ['video-editing-graphic-design', 'Video Editing & Design'],
              ].map(([id, label]) => (
                <li className="mb-2" key={id}><Link to={`/services/${id}`} className="text-secondary">{label}</Link></li>
              ))}
            </ul>
          </Col>

          {/* Company */}
          <Col sm={6} lg={2}>
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ letterSpacing: 1 }}>Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/about" className="text-secondary">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary">Contact</Link></li>
              <li className="mb-2"><a href="#team" className="text-secondary">Our Team</a></li>
              <li className="mb-2"><a href="#benefits" className="text-secondary">Why Us</a></li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col sm={6} lg={3}>
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ letterSpacing: 1 }}>Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/" className="text-secondary">Home</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary">Schedule a Meeting</Link></li>
              <li className="mb-2"><a href="#services" className="text-secondary">Services</a></li>
              <li className="mb-2"><a href="#stats" className="text-secondary">Stats</a></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom bar */}
        <hr style={{ borderColor: 'var(--bp-border)' }} />
        <div className="d-flex flex-wrap justify-content-between align-items-center small text-secondary">
          <span>&copy; {year} BOTPILOT AI. All rights reserved.</span>
          <span>Built with ❤️ in <a href="#" style={{ color: 'var(--bp-cyan)' }}>Pakistan</a></span>
        </div>
      </Container>
    </footer>
  );
}
