import React from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import Order from '../components/Order/Order';

const Main = () => {
    return (
        <div>
        <Header/>
        <Banner/>
        <Cards/>
        <Order/>
        <Footer/>
        
        </div>
    );
};

export default Main;