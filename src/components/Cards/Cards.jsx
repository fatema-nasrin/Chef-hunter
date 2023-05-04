import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
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
    <div>
      <div className="text-center">

      <h1>Our Top Cook</h1>
      <p>Experience the joy of food exploration with our website, where you can find endless inspiration, delicious recipes, and insider tips from top chefs and food experts.</p>
      </div>

      <div className="d-flex flex-wrap mx-5">
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
      </div>
    </div>
  );
};

export default Cards;
