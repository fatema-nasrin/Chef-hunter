import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaHeart, FaBook } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import useTitle from "../../hooks/useTitle";

const Recipes = () => {
  useTitle('chef-recipe')
  const chefInfo = useLoaderData();
  const { name, picture, bio, likes, experience, recipes, chefRecipe } =
    chefInfo;

  return (
    <div>
      <Container>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img
              src={picture}
              className="img-fluid rounded-circle"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <h2>{name}</h2>
            <p>{bio}</p>
            <ul>
              <li>
                <FaHeart className="mr-2 mx-1" />
                {likes} Likes
              </li>
              <li>
                <FaBook className="mr-2 mx-1" />
                {recipes} Recipes
              </li>
              <li>{experience} Years of Experience</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="container my-5">
        <h2 className="text-center mb-5">Chef's Signature Recipes</h2>
        <div className="row">
          {chefRecipe.map((recipe, index) => (
            <div key={index} className="col-md-4 mb-4">
              <RecipeCard
                recipeImage={recipe.recipeImage}
                recipe_name={recipe.recipe_name}
                ingredients={recipe.ingredients}
                cooking_method={recipe.cooking_method}
                rating={recipe.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
