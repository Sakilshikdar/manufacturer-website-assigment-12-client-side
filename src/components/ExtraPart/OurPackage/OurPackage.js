import React from 'react';
import './OurPackage.css'

const OurPackage = () => {
    return (
        <div>
            <h2 className='d-flex justify-content-center text-3xl text-primary mt-5'> Our Package</h2>
            <div className=" mt-3 container package align-items-center">
                <div className='offer'>
                    <div className=' p-7'>
                    <h2 className='text-xl text-secondary'>Gold Membership Package</h2>
                    <h6 className="opacity-50">This is the Discount package and get membership </h6>
                    </div>
                    <div className=''>
                    <p className='d-flex'><a href=""><svg width="20" className="bg-orange-500 text-yellow border ml-5 rounded-circle mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></a>
                        <span className="opacity-50">Unlimited access in shop</span></p>
                    <p className='d-flex'><a href=""><svg width="20" className="bg-orange-500 text-yellow border ml-5 rounded-circle mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></a>
                        <span className="opacity-50">Secuirty facility</span></p>
                    <p  className='d-flex'><a href=""><svg width="20" className="bg-orange-500 text-yellow border ml-5 rounded-circle mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></a>
                        <span className="opacity-50">24hours any support</span></p>
                    <p className='d-flex'><a href=""><svg width="20" className="bg-orange-500 text-yellow border ml-5 rounded-circle mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></a>
                        <span className="opacity-50">Delivery support</span></p>
                    <p className='d-flex'><a href=""><svg width="20" className="bg-orange-500 text-yellow border ml-5 rounded-circle mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg></a>
                        <span className="opacity-50">10% bonus all Products</span></p>
                    <a className="mt-4 bg-primary text-white px-5 f-blue btn rounded-pill" href="#" role="button"><span className="fs-blue text-bold">Order Now</span></a>
                    </div>
                </div>

                <div>
                    <img className='package-img' src="https://i.ibb.co/b54WgRG/278325767-366115525550732-7588314717429124789-n.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default OurPackage;