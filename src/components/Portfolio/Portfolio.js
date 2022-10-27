import React from 'react';


const Portfolio = () => {
    return (
        <div className='text-center'>
            <div className="mt-9 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src='https://i.ibb.co/BL5vP3k/312841081-648522170217665-6350485512454630423-n-removebg-preview.jpg' className="sm:ml-0 lg:ml-40 w-[400px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hello, I am sakil Full Stack Developer</h1>
                        <p className="py-6">hey my name is sakil.I am a jonuior fullStack developer. <br /> I have much knowledge about webside Development.I love make webside.If you want hire me.</p>
                        <a href='https://drive.google.com/file/d/1V1as-MXbaix8c7-oEjJYTiUIpHdwRgfv/view?usp=sharing' className="btn btn-primary text-white">Hire me</a>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className=" ">
                        <h1 className='text-4xl text-primary text-center  font-mono font-bold'>About me</h1>
                        <div className="py-6 w-full text-xl border-l-orange-700">
                            <h1 className=' text-success'>Name:Sakil</h1>
                            <h1 className='py-2 text-success'>Address: 10/7 Ziya Road, Dhaka, Bangladesh.</h1>
                            <h1 className='text-success'>Education: Bsc in programming</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl text-primary bg-base-200 font-bold font-mono'>Skills</h1>
            <div className="footer p-6 mb-10 bg-base-200 text-base-content">
                
                <div className='lg:d-flex lg:ml-28 justify-center '>
                    <div className="text-success badge badge-lg">HTML</div>
                    <div className="text-success badge badge-lg">CSS</div>
                    <div className="text-success badge badge-lg">BOOSTRAP</div>
                </div>
                <div className='lg:d-flex lg:justify-self-end justify-center lg:mr-64'>
                    <div className="text-success badge badge-lg">REACT-BOOSTRAP</div>
                    <div className="text-success badge badge-lg">TAILWIND CSS</div>
                    <div className="text-success badge badge-lg">REACT-DAISYUI</div>
                </div>
                <div className='lg:d-flex mr-28  lg:justify-self-end'>
                    <div className="text-success badge badge-lg">JAVASCRIPT</div>
                    <div className="badge badge-lg text-success">REACT-JS</div>
                    <div className="badge badge-lg text-success">MONGO-DB</div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;