import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Cards = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <div className="text-center">

      <h1>Our Top Cook</h1>
      <p>Experience the joy of food exploration with our website, where you can find endless inspiration, delicious recipes, and insider tips from top chefs and food experts.</p>
      </div>

      <Row>
          {chefs.map((chef) => (
            <Col key={chef.name} xs={12} md={6} lg={4}>
              <Card className="my-2">
                <Card.Img variant="top" src={chef.picture} />
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    Years of Experience: {chef.experience}
                    <br />
                    Number of Recipes: {chef.recipes}
                    <br />
                    Likes: {chef.likes}
                  </Card.Text>
                  <Link to= {`recipes/${chef.id}`}>
                  <Button variant="outline-info">View Recipes</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
};

export default Cards;
