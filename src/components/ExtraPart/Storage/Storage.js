import React from 'react';
import './Storage.css'

const Storage = () => {
    return (
        <div className=' mt-4 p-2'>
            <h1 className='d-flex justify-content-center text-2xl text-primary p-3'>Our Storage System</h1>
            <div className='storage  bg-secondary'>
            <div>
                <img className='p-5 img-fluid' style={{width:'800px'}} src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/4.jpg" alt="" />
            </div>
                <div className= 'para p-5 my-auto'>
                <h2 className=' text-white text-2xl py-3'>Storage</h2>
                <p >We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible-qualities that are essential to help businesses in this market. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, which focuses on not only increasing efficiency, but cutting down costs. With our vast network of warehouses and distribution centers spread throughout the country, it becomes much easier to cater to a audience in a record response time, which is the key factor in winning the hearts of the customer and having an edge over the competitors.</p>
                </div>
            </div>
        </div>
    );
};

export default Storage;