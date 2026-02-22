/**
 * Contact Component — BOTPILOT AI
 * Bootstrap-based contact info + form. Sends data to Python FastAPI backend.
 */
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bp-section" id="contact" style={{ background: 'var(--bp-card)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="bp-section-title gradient-text">Get In Touch</h2>
          <p className="text-secondary">Ready to transform your infrastructure? Let&apos;s talk.</p>
        </div>

        <Row className="g-5">
          {/* Left — Info */}
          <Col lg={5}>
            <h3 className="gradient-text fw-bold mb-3" style={{ fontSize: '1.8rem' }}>
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-secondary mb-4">
              Whether you need cloud migration, CI/CD pipelines, or complete DevOps transformation —
              our team is ready to help you ship faster, scale smarter, and stay secure.
            </p>

            {[
              { icon: 'bi-geo-alt', label: 'Address', value: 'Lahore, Punjab, Pakistan' },
              { icon: 'bi-telephone', label: 'Phone', value: '+92 300 1234567' },
              { icon: 'bi-envelope', label: 'Email', value: 'hello@botpilot.ai' },
            ].map((item, i) => (
              <div className="d-flex align-items-center gap-3 mb-4" key={i}>
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{ width: 48, height: 48, background: 'rgba(37,99,235,.1)', color: 'var(--bp-cyan)', fontSize: '1.2rem' }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <div className="text-secondary small text-uppercase fw-semibold" style={{ letterSpacing: 1 }}>{item.label}</div>
                  <div className="text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </Col>

          {/* Right — Form */}
          <Col lg={7}>
            <div className="bp-card p-4 p-lg-5">
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-secondary small text-uppercase fw-semibold">Full Name</Form.Label>
                      <Form.Control
                        type="text" name="name" placeholder="Your name"
                        value={form.name} onChange={handleChange} required
                        className="bg-transparent border-secondary text-white"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-secondary small text-uppercase fw-semibold">Email</Form.Label>
                      <Form.Control
                        type="email" name="email" placeholder="your@email.com"
                        value={form.email} onChange={handleChange} required
                        className="bg-transparent border-secondary text-white"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-secondary small text-uppercase fw-semibold">Phone</Form.Label>
                      <Form.Control
                        type="tel" name="phone" placeholder="+92 300 1234567"
                        value={form.phone} onChange={handleChange}
                        className="bg-transparent border-secondary text-white"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-secondary small text-uppercase fw-semibold">Message</Form.Label>
                      <Form.Control
                        as="textarea" rows={5} name="message" placeholder="Tell us about your project..."
                        value={form.message} onChange={handleChange} required
                        className="bg-transparent border-secondary text-white"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="btn-bp w-100 py-3" disabled={loading}>
                      {loading ? <><Spinner size="sm" className="me-2" /> Sending...</> : <>Send Message <i className="bi bi-send ms-1"></i></>}
                    </Button>
                  </Col>
                </Row>

                {status === 'success' && (
                  <Alert variant="success" className="mt-3 text-center">
                    ✅ Message sent successfully! We&apos;ll get back to you soon.
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert variant="danger" className="mt-3 text-center">
                    ❌ Something went wrong. Please try again or email us directly.
                  </Alert>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
