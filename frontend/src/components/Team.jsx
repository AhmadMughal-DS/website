/**
 * Team Component — BOTPILOT AI
 * Team member cards with Bootstrap grid, avatar placeholders, and social links.
 */
import { Container, Row, Col } from 'react-bootstrap';

const team = [
  { name: 'Umar Abdullah', role: 'Founder & Lead DevOps Engineer', image: null, linkedin: '#', github: '#' },
  { name: 'Ahmed Khan', role: 'Cloud Architect', image: null, linkedin: '#', github: '#' },
  { name: 'Sara Malik', role: 'Full-Stack Developer', image: null, linkedin: '#', github: '#' },
  { name: 'Ali Hassan', role: 'AI / ML Engineer', image: null, linkedin: '#', github: '#' },
];

export default function Team() {
  return (
    <section className="bp-section" id="team">
      <Container>
        <div className="text-center mb-5">
          <h2 className="bp-section-title gradient-text">Meet the Team</h2>
          <p className="text-secondary">The engineers behind your next-gen infrastructure</p>
        </div>

        <Row className="g-4 justify-content-center">
          {team.map((m, i) => (
            <Col sm={6} lg={3} key={i}>
              <div className="bp-card text-center overflow-hidden h-100">
                {/* Avatar */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: 240,
                    background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2a6c 100%)',
                  }}
                >
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  ) : (
                    <i className="bi bi-person-circle" style={{ fontSize: '4rem', color: 'rgba(255,255,255,.15)' }}></i>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <h6 className="fw-bold text-white mb-1">{m.name}</h6>
                  <p className="small mb-3" style={{ color: 'var(--bp-cyan)' }}>{m.role}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href={m.linkedin} target="_blank" rel="noreferrer"
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 34, height: 34, background: 'rgba(37,99,235,.1)', color: 'var(--bp-accent)' }}
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={m.github} target="_blank" rel="noreferrer"
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 34, height: 34, background: 'rgba(37,99,235,.1)', color: 'var(--bp-accent)' }}
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
