import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg" className="mb-3 px-4">
        <Navbar.Brand as={Link} to="/">
          <span className="text-danger">
            {" "}
            <img
              width="40"
              height="40"
              src="https://i.ibb.co/SrXfZ8P/chef-logo.png"
              alt=""
            />{" "}
            SAKURA
          </span>{" "}
          KITCHEN
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
            {user && <FaUserCircle size={30} />}

            {user ? (
              <Button variant="outline-secondary">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="outline-secondary">Login</Button>
              </Link>
            )}
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
    </div>
  );
};

export default Header;
