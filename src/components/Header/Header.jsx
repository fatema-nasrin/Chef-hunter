import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    Navigate('/')
  }
  return (
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <span className="text-danger">
            {" "}
            <img
              width="40"
              height="40"
              src="https://i.ibb.co/SrXfZ8P/chef-logo.png"
              alt=""
            />{" "}
            SAKURA
          </span>
           KITCHEN
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav>
      <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
      </Nav>
      {user ? (
        <Nav>
          <img
          width="40"
          height="40"
          src={user.photoURL}
          alt="User Profile Picture"
          className="rounded right-10"
        />
          <NavDropdown id="profile-dropdown">
            <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;



