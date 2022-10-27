import React from 'react';
import service from '../../images/icon/service.png'
import client from '../../images/icon/office-staff.png'
import client2 from '../../images/icon/branch-locator.png'
import './Summary.css'

const Summary = () => {
    return (
        <div className='summary lg:h-[400px]'>
            <div className='mt-16'>
                <p className='text-3xl font-bold text-primary text-center'>Our services</p>
                </div>
                <div className='grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-40 '>
                    <div data-aos="flip-left" data-aos-duration="2000" className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className="card-title w-20 mx-auto mb-0" src={service} alt="" />
                            <p className='mx-auto text-2xl font-bold mt-0'>1200 <span className='text-3xl'>+</span></p>
                            <p className='mx-auto font-bold text-2xl'>Clients Services</p>
                        </div>
                    </div>


                    <div data-aos="flip-left" data-aos-duration="2000" className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img className="card-title w-20 mx-auto mb-0" src={client} alt="" />
                            <p className='mx-auto text-2xl font-bold mt-0'>2600 <span className='text-3xl'>+</span></p>
                            <p className='mx-auto font-bold text-2xl'>happy clients</p>
                        </div>
                    </div>

                    <div data-aos="flip-left" data-aos-duration="2000" className="card bg-base-100 shadow-xl">
                        <div className="card-body"
                        >
                            <img className="card-title w-20 mx-auto mb-0" src={client2} alt="" />
                            <p className='mx-auto text-2xl font-bold mt-0'>200 <span className='text-3xl'>+</span></p>
                            <p className='mx-auto font-bold text-2xl'>branch office</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Summary;