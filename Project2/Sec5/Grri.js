import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import expImage from '../../Project2/Sec5/th (1).jpeg';
import franchiseVideo from '../../Project2/Sec5/Lec_17.mp4';
import chefImage from '../../Project2/Sec5/th.jpeg';

function AutoLayoutExample() {
  return (
    <Container fluid className="mt-5 p-5" style={{ backgroundColor: '#000', color: '#fff' }}>
      
  
      <Row className="mb-5 align-items-center">
        <Col md={6} className="text-center text-md-start">
          <motion.img
            src={expImage}
            alt="Experience"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '80%', height: 'auto', borderRadius: '15px' }} 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <h5 className="mt-3 text-primary">3 Years Experience</h5>
        </Col>

        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold text-warning">Traditional Pakistani Flavors</h2>
          <p className="text-light">
            A restaurant where tradition meets culinary excellence. Our story begins with 
            a deep-rooted passion for preserving and sharing the timeless flavors of Cuisine. 
            Since 2020, we've been on a flavorful journey, dedicated to offering you an authentic taste of our heritage.
          </p>
        </Col>
      </Row>

    
      <Row className="mb-5 align-items-center"> 
        <Col md={6} className="text-center">
          <h3 className="fw-bold text-success">Are you ready to be part of something exciting and grow with us?</h3>
          <video 
            src={franchiseVideo} 
            controls 
            className="img-fluid rounded shadow mt-3"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }}
          />
        </Col>

    
        <Col md={6} className="text-center text-md-start">
          <p className="lead text-light">
            Join our ever-expanding family by owning a franchise of TKR! Our franchise program offers 
            entrepreneurs and business-minded individuals the opportunity to benefit from a proven business 
            model with a brand that’s loved by all.
          </p>
          <Button variant="primary" size="lg" className="mt-3 shadow">
            Need a Franchise?
          </Button>
        </Col>
      </Row>

     
      <Row className="mb-5 align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h3 className="fw-bold text-danger">DELIGHT IN EVERY BITE</h3>
          <h5 className="fw-bold text-primary">Our Chef Recommend</h5>
          <p className="lead text-light">
            Indulge in our Chef’s Recommendations, a curated selection of culinary masterpieces 
            that embody the essence of our kitchen. These dishes are a testament to our chef’s 
            expertise and creativity, promising a delightful journey through exceptional flavors and 
            innovative combinations.
          </p>
          <Button variant="danger" size="lg" className="mt-3 shadow">
            VIEW MENU
          </Button>
        </Col>

      
        <Col md={6} className="text-center">
          <motion.img
            src={chefImage}
            alt="Chef Special"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }}
            animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </Col>
      </Row>

    </Container>
  );
}

export default AutoLayoutExample;
