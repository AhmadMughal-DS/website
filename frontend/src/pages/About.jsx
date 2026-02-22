/**
 * About Page — BOTPILOT AI
 * Our story, mission, core values, and team (all Bootstrap).
 */
import { Container, Row, Col } from 'react-bootstrap';
import Team from '../components/Team';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: '50vh',
          paddingTop: 140, paddingBottom: 60,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(37,99,235,.12) 0%, transparent 60%), var(--bp-dark)',
        }}
      >
        <div>
          <h1 className="display-4 fw-bold gradient-text text-uppercase mb-3">About BOTPILOT AI</h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: 650, fontSize: '1.1rem' }}>
            We&apos;re a team of passionate DevOps engineers, cloud architects, and AI specialists
            on a mission to modernize Pakistan&apos;s tech infrastructure.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bp-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div
                className="rounded-4 d-flex align-items-center justify-content-center"
                style={{
                  height: 380,
                  background: 'linear-gradient(135deg, #0a0f1c, #1a2a6c)',
                  border: '1px solid var(--bp-border)',
                  fontSize: '5rem', color: 'rgba(255,255,255,.1)',
                }}
              >🚀</div>
            </Col>
            <Col lg={7}>
              <h2 className="gradient-text fw-bold mb-4" style={{ fontSize: '2rem' }}>Our Story</h2>
              <p className="text-secondary lh-lg">
                BOTPILOT AI was born from a simple observation: businesses in Pakistan deserve
                world-class infrastructure without world-class pricing. Too many companies
                struggle with manual deployments, fragile servers, and mounting cloud bills.
              </p>
              <p className="text-secondary lh-lg">
                We started as a small team of DevOps engineers who were tired of seeing
                brilliant products held back by poor infrastructure. Today, we help companies
                across 12+ countries ship faster, scale smarter, and sleep better at night.
              </p>
              <p className="text-secondary lh-lg">
                Our approach combines battle-tested DevOps practices with cutting-edge AI and
                cloud technologies — all tailored to the unique needs of the South Asian market.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="bp-section" style={{ background: 'var(--bp-card)' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="bp-section-title gradient-text">Our Core Values</h2>
            <p className="text-secondary">The principles that drive every decision we make</p>
          </div>
          <Row className="g-4 justify-content-center">
            {[
              { emoji: '⚡', title: 'Speed', desc: 'We believe in rapid iteration. Deploy in minutes, not weeks. Every automation we build saves hours of manual work.' },
              { emoji: '🛡️', title: 'Reliability', desc: '99.9% uptime is our baseline. We build systems that self-heal, auto-scale, and never quit.' },
              { emoji: '🤝', title: 'Partnership', desc: 'We don\'t just deliver and disappear. Your success is our success — we stay with you through every scale-up.' },
              { emoji: '💡', title: 'Innovation', desc: 'From AI chatbots to FinOps — we stay on the cutting edge so our clients always have a competitive advantage.' },
            ].map((v, i) => (
              <Col sm={6} lg={3} key={i}>
                <div className="bp-card text-center p-4 h-100">
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">{v.emoji}</div>
                  <h6 className="fw-bold text-white mb-2">{v.title}</h6>
                  <p className="text-secondary small mb-0">{v.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Team />
    </>
  );
}
