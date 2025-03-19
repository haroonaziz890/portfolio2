import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      background: "#000", 
      padding: "20px"
    }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit} 
        style={{ 
          width: "100%", 
          maxWidth: "500px", 
          padding: "20px", 
          background: "#111", 
          color: "#fff", 
          borderRadius: "10px", 
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" 
        }}
      >
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="First Name" defaultValue="Mark" style={{ background: "#222", color: "#fff", border: "1px solid #555" }} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Last Name" defaultValue="Otto" style={{ background: "#222", color: "#fff", border: "1px solid #555" }} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text style={{ background: "#444", color: "#fff", border: "1px solid #555" }}>@</InputGroup.Text>
            <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required 
              style={{ background: "#222", color: "#fff", border: "1px solid #555" }} 
            />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required style={{ background: "#222", color: "#fff", border: "1px solid #555" }} />
          <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required style={{ background: "#222", color: "#fff", border: "1px solid #555" }} />
          <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required style={{ background: "#222", color: "#fff", border: "1px solid #555" }} />
          <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" 
            style={{ color: "#fff" }} 
          />
        </Form.Group>

        <Button type="submit" className="w-100" style={{ background: "#ff6600", border: "none", fontWeight: "bold" }}>Submit Form</Button>
      </Form>
    </div>
  );
}

export default FormExample;
