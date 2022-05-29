import React from 'react';
import pic from '../../images/pic 2.png';


const Portfolio = () => {
    return (
        <div className='text-center'>
            <div class="hero mt-9 bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic} 
                    style={{width:"350px"}} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Hello, I am sakil <br />Full Stack Developer</h1>
                        <p class="py-6">hey my name is sakil.I am a jonuior fullStack developer. <br /> I have much knowledge about webside Development.I love make webside.If you want hire me.</p>
                        <button class="btn btn-primary">Hire me</button>
                    </div>
                </div>
            </div>
            <div class="hero bg-base-200">
                <div class="hero-content text-center">
                    <div class=" ">
                        <h1 className='text-4xl text-primary text-center  font-mono font-bold'>About me</h1>
                        <div class="py-6 w-full text-xl border-l-orange-700">
                            <h1 className=' text-success'>Name:Sakil</h1>
                            <h1 className='py-2 text-success'>Address: 10/7 Ziya Road, Dhaka, Bangladesh.</h1>
                            <h1 className='text-success'>Education: bsc in programming</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-primary bg-base-200 font-bold font-mono'>Skills</h1>
            <div class="footer p-6 mb-10 bg-base-200 text-base-content">
                
                <div className='lg:d-flex lg:ml-28 justify-center '>
                    <div class="text-success badge badge-lg">HTML</div>
                    <div class="text-success badge badge-lg">CSS</div>
                    <div class="text-success badge badge-lg">BOOSTRAP</div>
                </div>
                <div className='lg:d-flex lg:justify-self-end justify-center lg:mr-64'>
                    <div class="text-success badge badge-lg">REACT-BOOSTRAP</div>
                    <div class="text-success badge badge-lg">TAILWIND CSS</div>
                    <div class="text-success badge badge-lg">REACT-DAISYUI</div>
                </div>
                <div className='lg:d-flex mr-28  lg:justify-self-end'>
                    <div class="text-success badge badge-lg">JAVASCRIPT</div>
                    <div class="badge badge-lg text-success">REACT-JS</div>
                    <div class="badge badge-lg text-success">MONGO-DB</div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;