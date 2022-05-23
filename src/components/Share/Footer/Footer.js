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
              <h4 className="text-white text-xl">Our Services</h4> 
              <p className='text-white'>All Services</p>
              <p className='text-white'>Cargo</p>
              <p className='text-white'>Transport</p>
              <p className='text-white'>storage</p>
              </div>
            <small className="icon text-white">© 2022 bike.All rights reserved</small>
          </div>
          <div className="col">
            <div className="contract-section pt-5 ps-5">
              <h4 className="text-white d-flex justify-content-around text-2xl">Contract Us</h4> 
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className="m-1" src={logo1} alt="" /><small className='m-2 text-lg text-white text-decoration-none'>What's app</small></a>
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className="m-1" src={logo2} alt="https://play.google.com/settings" /><small className='m-2 text-white text-lg'>Messenger</small></a>
               <a className="app-store d-flex justify-content-center" target="_blank"  href=""><img className=" m-1" src={logo3} alt="https://play.google.com/settings" /><small className='m-2 text-white text-lg'>Youtube</small></a>
            </div>
          </div>
      </div>
      </div>
        </div>
    );
};

export default Footer;

