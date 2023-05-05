import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              height={500}
              src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg"
            />{" "}
            <br />
            <Link to="/">
              <button className="btn btn-success mt-4">Back to Home</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
