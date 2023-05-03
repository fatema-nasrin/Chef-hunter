import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        
      <Navbar bg="light">
        <Container className="inline-flex">
          <Navbar.Brand href="#home">
            {" "}
            <img className="h-50 w-50" src="/src/assets/logo2.svg" alt="" />
          </Navbar.Brand>

          <h2>SAKURA KITCHEN</h2>

          
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Blog</Nav.Link>
            </Nav.Item>
          
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
