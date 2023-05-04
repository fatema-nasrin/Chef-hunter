import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import LoginLayout from './Layout/LoginLayout.jsx';
import Login from './components/Pages/Login/Login/Login.jsx';
import Register from './components/Pages/Login/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginLayout/>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
       {
        path:"/login",
        element:<Login/>
       },
       {
        path:"/register",
        element:<Register/>
       }
    ]
  },
  {
    path: "/",
    element: <Main/>
    
  },
  {
    path: "/blog",
    element: <Blog/>
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
