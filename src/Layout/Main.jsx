import React from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import Order from '../components/Order/Order';
import Facilities from '../components/Facilities/Facilities';

const Main = () => {
    return (
        <div>
        <Header/>
        <Banner/>
        <Cards/>
        <Order/>
        <Facilities/>
        <Footer/>
        
        </div>
    );
};

export default Main;