import React from 'react';
import OurPackage from '../../ExtraPart/OurPackage/OurPackage';
import Banner from '../../Home/Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Products></Products> */}
            <OurPackage></OurPackage>
            {/* <Storage></Storage> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;