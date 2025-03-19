import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerExample() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center w-100"
      style={{ marginTop: "50px", minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12}> 
          <video
            src={require("../../Project2/Sec1/Lec_43.mp4")}
            className="img-fluid"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "25px",
              boxShadow: "15px 15px 30px rgba(0,0,0,0.4)",
              cursor: "pointer",
            }}
            controls
            autoPlay
            loop
            muted
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
