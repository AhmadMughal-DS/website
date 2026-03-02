/**
 * Services Component — BOTPILOT AI
 * Bootstrap grid of service cards linking to individual service detail pages.
 */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import servicesData from '../data/servicesData';

export default function Services() {
  const gridRef = useRef(null);

  /* Scroll-reveal animation */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    gridRef.current?.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bp-section" id="services">
      <Container>
        <div className="text-center mb-5">
          <h2 className="bp-section-title gradient-text">What We Offer</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 620 }}>
            End-to-end digital solutions — from websites to AI chatbots, social media to paid ads
          </p>
        </div>

        <Row ref={gridRef} className="g-4">
          {servicesData.map((service, i) => (
            <Col key={service.id} sm={6} lg={4} xl={3}>
              <Link to={`/services/${service.id}`} className="text-decoration-none">
                <div
                  className="bp-card text-center p-4 h-100 fade-in"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-3"
                    style={{
                      width: 64, height: 64,
                      background: 'rgba(37,99,235,.1)',
                      fontSize: '1.6rem', color: 'var(--bp-accent)',
                      transition: 'all .3s ease',
                    }}
                  >
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h6 className="text-white fw-semibold mb-2">{service.name}</h6>
                  <p className="text-secondary small mb-0">{service.tagline}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
