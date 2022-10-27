import React from 'react';
import './Banner.css'
import logo from '../../../images/banner img/main.png'
const Banner = () => {
    return (
        <div className='home mt-4 align-items-center lg:h-[500px]'>
            <div data-aos="fade-left" data-aos-duration='1500' className='text-black details overflow-hidden'>
            <h2 className='text-3xl mb-3 '>This is a computer parts manufacturer house</h2>
            <p>This is a side here we stored some electronics products.Here have Tv,camera,laptop and other Electronics Products</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='1500'>
                <img className='img w-75' src={logo} />
            </div>
        </div>
    );
};

export default Banner;