/**
 * Benefits Component (Why Choose Us) — BOTPILOT AI
 * Bootstrap grid of benefit cards with icons.
 */
import { Container, Row, Col } from 'react-bootstrap';

const benefits = [
  { icon: 'bi-lightning-charge', title: 'Fast Turnaround', desc: 'From concept to launch in record time. We move fast so you can start seeing results sooner.' },
  { icon: 'bi-bar-chart-line', title: 'Data-Driven Results', desc: 'Every strategy is backed by analytics. We track, measure, and optimize to maximize your ROI.' },
  { icon: 'bi-people', title: 'Dedicated Team', desc: 'A passionate team of developers, designers, marketers & AI specialists fully focused on your growth.' },
  { icon: 'bi-graph-up-arrow', title: 'Scalable Solutions', desc: 'Solutions that grow with your business \u2014 whether you\u2019re a startup or an established brand.' },
  { icon: 'bi-palette', title: 'Creative Excellence', desc: 'Scroll-stopping designs and content that capture attention and build your brand identity.' },
  { icon: 'bi-headset', title: '24/7 Support', desc: 'Round-the-clock support and communication to keep your projects running smoothly.' },
];

export default function Benefits() {
  return (
    <section className="bp-section" id="benefits" style={{ background: 'rgba(17, 24, 39, 0.5)' }}>
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
