import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Blog from "./components/Blog/Blog.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import LoginLayout from "./Layout/LoginLayout.jsx";
import Login from "./components/Pages/Login/Login/Login.jsx";
import Register from "./components/Pages/Login/Register/Register.jsx";
import Error from "./components/ErrorPage/Error.jsx";
import RecipeDetailsLayout from "./Layout/RecipeDetailsLayout/RecipeDetailsLayout.jsx";
import Recipes from "./components/Pages/Recipes/Recipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path:"/",
        element:<RecipeDetailsLayout/>,
        
      },
      {
        path:"recipes/:id",
        element:<Recipes/>,
        loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: "/",
        element: <LoginLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      }
     
      
     
    ],
    
  },
  
  {
    path: "/blog",
    element: <Blog />,
  }
 
 
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
