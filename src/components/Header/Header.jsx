import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Image, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg" className="mb-3 px-4">
        <Navbar.Brand as={Link} to="/">
       <span className="text-danger"> <img  width="40" height="40" src="/src/assets/chef-logo.png" alt="" />  SAKURA</span> KITCHEN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={handleShow} />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto position-absolute top-50 start-50 translate-middle">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="position-absolute top-50 end-0 translate-middle-y">
            
               <Image
              src= ""
              roundedCircle
              width={40}
              height={40}
              className="mr-2"
            />
            
            <Button variant="outline-secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={handleClose}>
              Blog
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <Navbar className="sticky-top" bg="light">
        <Container className="inline-flex">
          <Navbar.Brand href="#home">
            <img className="h-50 w-50" src="/src/assets/logo2.svg" alt="" />
          </Navbar.Brand>

          <h2>SAKURA KITCHEN</h2>

          
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-secondary">

              <Nav.Link eventKey="link-1">Log In</Nav.Link>
              </Button>
            </Nav.Item>
           
          
        </Container>
      </Navbar> */}
    </div>
  );
};

export default Header;
