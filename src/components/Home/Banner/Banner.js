import React from 'react';
import './Banner.css'
import logo from '../../../images/banner img/main.png'
const Banner = () => {
    return (
        <div className='home mt-4 align-items-center bg-secondary'>
            <div className='text-white details'>
            <h2 className='text-3xl mb-3 '>This is a computer parts manufacturer house</h2>
            <p>This is a side here we stored some electronics products.Here have Tv,camera,laptop and other Electronics Products</p>
            </div>
            <div>
                <img className='img w-75' src={logo} />
            </div>
        </div>
    );
};

export default Banner;