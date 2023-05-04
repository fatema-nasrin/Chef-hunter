import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div >
      <footer className="text-bg-dark p-5">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <h4>Food Menu</h4>
              <ul>
                <li>
                  <a href="/">Appetizers</a>
                </li>
                <li>
                  <a href="/">Entrees</a>
                </li>
                <li>
                  <a href="/">Desserts</a>
                </li>
                <li>
                  <a href="/">Beverages</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h4>Contact Us</h4>
              <ul>
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>Phone: (555) 555-5555</li>
                <li>Email: info@myrestaurant.com</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
