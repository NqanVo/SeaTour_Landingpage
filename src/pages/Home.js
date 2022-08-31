import React from 'react';
import Carousel from '../components/Carousel';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Select from '../components/Select';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Destinations></Destinations>
            <Search></Search>
            <Select></Select>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Home;