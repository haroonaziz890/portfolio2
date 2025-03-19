import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaUtensils, FaInfoCircle } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';


import combinedImg from '../../Project2/Sec4/th.jpeg';

function AutoLayoutExample() {
  return (
    <Container fluid className="mt-5 bg-dark text-white p-5"> 
      <Row className="border p-4 align-items-center">
        
        
        <Col md={6} className="text-center text-md-start p-4">
          <h6 className="text-uppercase text-warning">Welcome to TKR</h6>  
          <h2 className="fw-bold text-light">We do not cook, we create your emotions!</h2> 
          <p className="lead text-white-50">
            At our kitchen, we don't just cook; we craft emotions on every plate.
            Join us and let us create a symphony of tastes that resonates with your heart and soul.
          </p> 
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <Button variant="warning">
              <FaUtensils className="me-2" /> Our Menu
            </Button>
            <Button variant="outline-light">
              <FaInfoCircle className="me-2" /> About Us
            </Button>
          </div>
        </Col>

       
        <Col md={6} className="d-flex justify-content-center">
          <motion.img
            src={combinedImg}
            alt="Delicious Food"
            className="img-fluid shadow-lg"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '15px',
              objectFit: 'cover',
            }}
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
