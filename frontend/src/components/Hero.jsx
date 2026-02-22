/**
 * Hero Component — BOTPILOT AI
 * Full-screen hero with animated particles, heading, and CTA buttons (Bootstrap).
 */
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Hero() {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center min-vh-100 text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 40%, rgba(37,99,235,.15) 0%, transparent 60%), var(--bp-dark)',
      }}
    >
      {/* Floating particles */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero-particle" />
        ))}
      </div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Badge */}
        <span className="badge rounded-pill bg-dark border border-secondary text-light px-4 py-2 mb-4 fs-6">
          🤖 Pakistan&apos;s Premier DevOps &amp; AI Solutions
        </span>

        <h1 className="display-3 fw-bold text-white mb-3" style={{ lineHeight: 1.15 }}>
          Dare To Be Different?{' '}
          <span className="gradient-text d-block d-md-inline">Meet BOTPILOT AI</span>
        </h1>

        <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: 650 }}>
          A 360° Result-Oriented DevOps, Cloud &amp; AI Solutions Agency — Empowering
          Businesses with Modern Infrastructure, Intelligent Automation &amp; Scalable Deployments.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/contact" className="btn btn-bp btn-lg px-5">
            Get Started <i className="bi bi-arrow-right ms-1"></i>
          </Link>
          <a href="#services" className="btn btn-bp-outline btn-lg px-5">
            Our Services
          </a>
        </div>
      </Container>
    </section>
  );
}
