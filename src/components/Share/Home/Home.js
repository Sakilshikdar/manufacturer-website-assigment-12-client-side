import React from 'react';
import ReviewsDetails from '../../Dashboard/ReviewsDetails';
import OurPackage from '../../ExtraPart/OurPackage/OurPackage';
import Storage from '../../ExtraPart/Storage/Storage';
import Banner from '../../Home/Banner/Banner';
import Summary from '../../Home/Sumary';
import Products from '../../Products/products/Products'
import Footer from '../Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <ReviewsDetails></ReviewsDetails>
            <OurPackage></OurPackage>
            <Storage></Storage>
            <Footer></Footer>
        </div>
    );
};

export default Home;