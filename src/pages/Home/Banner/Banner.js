import React from 'react';
import bgImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg max-w-lg shadow-2xl" alt='' />
                <div className='mr-16 md:pl-24 max-w-xl'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;