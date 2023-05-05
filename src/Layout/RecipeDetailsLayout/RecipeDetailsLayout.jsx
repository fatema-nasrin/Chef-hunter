import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const RecipeDetailsLayout = () => {
    return (
        <div>
        
           <Outlet/>
           
        </div>
    );
};

export default RecipeDetailsLayout;