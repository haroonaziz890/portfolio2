import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function AutoLayoutExample() {
  return (
    <Container className="mt-4 text-white" style={{ backgroundColor: '#000' }}>
      
      <Row className="mb-4 text-center bg-dark text-white p-3">
        <Col className="fw-bold">🏠 Home</Col>
        <Col className="fw-bold">🍽️ Menu</Col>
        <Col className="fw-bold">📢 About Us</Col>
        <Col className="fw-bold">📞 Contact</Col>
        <Col className="fw-bold">🛒 Order Now</Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col className="border p-3">🍕 Pepperoni Pizza</Col>
        <Col className="border p-3">🍔 Classic Burger</Col>
        <Col className="border p-3">🍣 Sushi Platter</Col>
        <Col className="border p-3">🥗 Caesar Salad</Col>
        <Col className="border p-3">🍩 Glazed Donuts</Col>
      </Row>
      <Row className="mb-4 text-center bg-dark text-white p-3">
        <Col className="border p-3">🏡 Dine-In</Col>
        <Col className="border p-3">🚗 Takeaway</Col>
        <Col className="border p-3">📦 Delivery</Col>
        <Col className="border p-3">🎉 Catering</Col>
        <Col className="border p-3">🍷 Private Events</Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col className="border p-3">👨‍🍳 Chef Ali</Col>
        <Col className="border p-3">👩‍🍳 Chef Sana</Col>
        <Col className="border p-3">👨‍🍳 Chef Ahmed</Col>
        <Col className="border p-3">👩‍🍳 Chef Maria</Col>
        <Col className="border p-3">👨‍🍳 Chef Bilal</Col>
      </Row>

      <Row className="mb-4 text-center bg-dark text-white p-3">
        <Col className="border p-3">⭐ 5/5 - "Amazing taste!"</Col>
        <Col className="border p-3">⭐ 4.5/5 - "Great Service!"</Col>
        <Col className="border p-3">⭐ 4.8/5 - "Loved the ambiance!"</Col>
        <Col className="border p-3">⭐ 5/5 - "Best Pizza in town!"</Col>
        <Col className="border p-3">⭐ 4.9/5 - "Highly recommended!"</Col>
      </Row>

      <Row className="mb-4 text-center">
        <Col className="border p-3">🎉 50% Off Mondays</Col>
        <Col className="border p-3">🎊 Buy 1 Get 1 Free</Col>
        <Col className="border p-3">🥤 Free Drink on Combo</Col>
        <Col className="border p-3">🍕 Family Feast Deal</Col>
        <Col className="border p-3">🎂 Birthday Special</Col>
      </Row>

      <Row className="mb-4 text-center bg-dark text-white p-3">
        <Col className="border p-3">📍 Karachi</Col>
        <Col className="border p-3">📍 Lahore</Col>
        <Col className="border p-3">📍 Islamabad</Col>
        <Col className="border p-3">📍 Peshawar</Col>
        <Col className="border p-3">📍 Quetta</Col>
      </Row>

      <Row className="mb-4 text-center">
        <Col className="border p-3">🍹 Mojito</Col>
        <Col className="border p-3">🥤 Cold Coffee</Col>
        <Col className="border p-3">🍵 Green Tea</Col>
        <Col className="border p-3">🧋 Bubble Tea</Col>
        <Col className="border p-3">🍷 Lemonade</Col>
      </Row>

      <Row className="mb-4 text-center bg-dark text-white p-3">
        <Col className="border p-3">💳 Visa</Col>
        <Col className="border p-3">💰 Cash</Col>
        <Col className="border p-3">📲 JazzCash</Col>
        <Col className="border p-3">🏦 Bank Transfer</Col>
        <Col className="border p-3">📱 Easypaisa</Col>
      </Row>

      <Row className="mb-4 text-center">
        <Col className="border p-3">📘 Facebook</Col>
        <Col className="border p-3">📸 Instagram</Col>
        <Col className="border p-3">📢 Twitter</Col>
        <Col className="border p-3">🎥 YouTube</Col>
        <Col className="border p-3">📩 Email Us</Col>
      </Row>

    </Container>
  );
}

export default AutoLayoutExample;
