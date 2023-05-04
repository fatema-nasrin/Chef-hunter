import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cards = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="px-5">
      <div className="text-center">

      <h1>Our Top Cook</h1>
      <p>Experience the joy of food exploration with our website, where you can find endless inspiration, delicious recipes, and insider tips from top chefs and food experts.</p>
      </div>

      <Row>
          {chefs.map((chef) => (
            <Col key={chef.name} xs={12} md={6} lg={4}>
              <Card>
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      {/* <div className="d-flex flex-wrap mx-5">
        {chefs.map((chef) => (
          <Card style={{ width: "18rem",margin:"10px"}} key={chef.id}>
            <Card.Img variant="top fit"src={chef.picture}/>
            <Card.Body>
              <Card.Title>{chef.name} </Card.Title>
              <Card.Text>
                <p>{chef.experience}+ Years Of Experience </p>
                <p> <b>No.of recipes:</b> {chef.recipes}</p>
              </Card.Text>
              <Button variant="outline-info">View Recipes</Button>
            </Card.Body>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default Cards;
