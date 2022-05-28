import React from 'react';

const Portfolio = () => {
    return (
        <div className='text-center'>
            <div class="hero mt-9 bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" /> */}
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
                        <h1 className='text-4xl text-primary text-center'>About me</h1>
                        <div class="py-6 w-75 d-flex row text-xl border-l-orange-700">
                            Name: <span className=' ml-0'>Sakil</span>
                            <br />
                            <h1>Address: <span className='ml-60'>10/7 Ziya Road, Dhaka, Bangladesh.</span></h1>
                            <br />
                            Education: <span className=' ml-60'>bsc in cse</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h1 className='text-4xl mt-5 text-primary text-center'>About me</h1>
            </div>
            <div className='text-xl mt-4'>
                Age: 20
            </div> */}
        </div>
    );
};

export default Portfolio;