import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Your main content goes here */}
      
      <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '30px 0', marginTop: 'auto' }}>
        <Container>
          <Row className="text-center text-md-start">
            {/* ✅ Menu & Links */}
            <Col md={3} className="mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li>🍽️ Our Menu</li>
                <li>📅 Reservations</li>
                <li>📢 About Us</li>
                <li>🔥 Trending Now</li>
                <li>📞 Contact</li>
              </ul>
            </Col>

            {/* ✅ Timings & Address */}
            <Col md={3} className="mb-4">
              <h5 className="fw-bold">Timings</h5>
              <p>🕒 11 AM - 1 AM</p>
              <h5 className="fw-bold">Address</h5>
              <p>📍 Shakar Parian, Islamabad, Pakistan, 44000</p>
            </Col>

            {/* ✅ Contact Info */}
            <Col md={3} className="mb-4">
              <h5 className="fw-bold">Contact</h5>
              <p>📞 +92 304 1110857</p>
              <p>📧 <a href="mailto:tkrfoodsisb@gmail.com" style={{ color: 'white' }}>tkrfoodsisb@gmail.com</a></p>
            </Col>

            {/* ✅ About TKR */}
            <Col md={3} className="mb-4">
              <h5 className="fw-bold">TKR</h5>
              <p>
                Welcome to <strong>TKR</strong>, where tradition meets culinary excellence. Our story begins with a deep-rooted passion for preserving and sharing the timeless flavors of Cuisine. <br /> <strong>Since 2020.</strong>
              </p>
            </Col>

          </Row>

          {/* ✅ Bottom Section */}
          <Row className="text-center mt-4">
            <Col>
              <p className="mb-0">© {new Date().getFullYear()} TKR | All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
