import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({
  recipeImage,
  recipe_name,
  ingredients,
  cooking_method,
  rating,
}) => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    toast.success("Items added as favourite!", { autoClose: 2000 });
    setShowButton(false);
  };
  return (
    <Card>
      <Card.Img
        variant="top"
        style={{ height: "300px", width: "auto" }}
        src={recipeImage}
      />
      <Card.Body>
        <Card.Title>{recipe_name}</Card.Title>
        <Card.Text>
          <b>Ingredients:</b>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>
            <b>Method:</b> {cooking_method}
          </p>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaStar className="mr-1" /> {rating}
          </div>

          <Button
            onClick={handleClick}
            style={{ display: showButton ? "block" : "none" }}
          >
            Favorite
          </Button>
          <ToastContainer />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
