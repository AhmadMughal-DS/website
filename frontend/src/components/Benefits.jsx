/**
 * Benefits Component (Why Choose Us) — BOTPILOT AI
 * Bootstrap grid of benefit cards with icons.
 */
import { Container, Row, Col } from 'react-bootstrap';

const benefits = [
  { icon: 'bi-lightning-charge', title: 'Rapid Deployment', desc: 'Ship features faster with automated CI/CD pipelines, reducing release cycles from weeks to minutes.' },
  { icon: 'bi-clock-history', title: '99.9% Uptime', desc: 'We design resilient, fault-tolerant architectures that keep your systems running around the clock.' },
  { icon: 'bi-people', title: 'Dedicated Team', desc: 'Get a team of certified cloud and DevOps engineers fully dedicated to your project.' },
  { icon: 'bi-graph-up-arrow', title: 'Scalable Solutions', desc: 'Infrastructure that scales with your business — from MVP to millions of users seamlessly.' },
  { icon: 'bi-shield-lock', title: 'Security-First', desc: 'DevSecOps practices embedded from day one — vulnerability scanning, RBAC, and compliance.' },
  { icon: 'bi-headset', title: '24/7 Support', desc: 'Round-the-clock support and incident management to keep your operations smooth.' },
];

export default function Benefits() {
  return (
    <section className="bp-section" id="benefits" style={{ background: 'var(--bp-card)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="bp-section-title gradient-text">Why Choose BOTPILOT AI?</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 600 }}>
            We don&apos;t just deliver projects — we deliver results that transform your business
          </p>
        </div>

        <Row className="g-4">
          {benefits.map((b, i) => (
            <Col md={6} lg={4} key={i}>
              <div className="bp-card d-flex align-items-start gap-3 p-4 h-100">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3"
                  style={{ width: 50, height: 50, background: 'rgba(37,99,235,.1)', fontSize: '1.3rem', color: 'var(--bp-cyan)' }}
                >
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <div>
                  <h6 className="fw-semibold text-white mb-1">{b.title}</h6>
                  <p className="text-secondary small mb-0">{b.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
