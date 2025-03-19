import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Project2/Sec0/LOGO 1.png"; 
function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant,food')",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        padding: "10px 20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1050,
      }}
    >
      <Container style={{ backgroundColor : "voilent green"}}>
      
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          style={{ gap: "10px" }}
        >
          <img src={logo} alt="Brand Logo" style={{ height: "45px" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}> 
            YourBrand
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {[
              "Home",
              "About",
              "Branches",
              "Menu",
              "Galleries",
              "Reservation",
              "Blogs",
              "Franchise",
            ].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#fff",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#ff5733")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
