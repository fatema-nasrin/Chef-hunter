import React from 'react';
import { Outlet } from 'react-router-dom';


const RecipeDetailsLayout = () => {
    return (
        <div>
        
           <Outlet/>
           
        </div>
    );
};

export default RecipeDetailsLayout;