import React from 'react';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import Order from '../components/Order/Order';
import Facilities from '../components/Facilities/Facilities';
import Carousel from '../components/Carousel/Carousel';

const Main = () => {
    return (
        <div>
        <Header/>
        <Banner/>
        <Cards/>
        <Carousel/>
        <Order/>
        <Facilities/>
        <Footer/>
        
        </div>
    );
};

export default Main;