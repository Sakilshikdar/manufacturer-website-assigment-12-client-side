import React from 'react';
import './Footer.css'
import logo1 from '../../../images/icon/whatsapp.ico'
import logo2 from '../../../images/icon/messenger.ico'
import logo3 from '../../../images/icon/youtube.ico'

const Footer = () => {
    return (
        <div className='last-section'>
            <div className="container-fluid">
        <div className="footer row">
          <div className="p-5 col">
          <div className=" service-section ps-5">
              <h4 className="text-black text-2xl font-bold">Our Services</h4> 
              <p className='text-black text-xl'>All Services</p>
              <p className='text-black text-xl'>Cargo</p>
              <p className='text-black text-xl'>Transport</p>
              <p className='text-black text-xl'>storage</p>
              </div>
            
          </div>
          <div className="col">
            <div className="contract-section pt-5 ps-5">
              <h4 className="text-black d-flex justify-content-around text-2xl">Contract Us</h4> 
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className="m-1" src={logo1} alt="" /><small className='m-2 text-lg text-black text-decoration-none'>What's app</small></a>
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className="m-1" src={logo2} alt="https://play.google.com/settings" /><small className='m-2 text-black text-lg'>Messenger</small></a>
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className=" m-1" src={logo3} alt="https://play.google.com/settings" /><small className='m-2 text-black text-lg'>Youtube</small></a>
            </div>
          </div>
      </div>
      </div>
      <small className="icon text-black text-lg lg:ml-[600px]">© 2022 bike.All rights reserved</small>
        </div>
    );
};

export default Footer;

