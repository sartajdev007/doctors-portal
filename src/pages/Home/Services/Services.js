import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const servicesData =
        [
            {
                id: 1,
                name: 'Fluoride Treatment',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic.',
                image: fluoride,
                bgClass: 'bg-gradient-to-r from-primary to-secondary text-white border-0'
            }
            ,
            {
                id: 2,
                name: 'Cavity Filling',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic.',
                image: cavity,
                bgClass: 'bg-neutral'
            }
            ,
            {
                id: 3,
                name: 'Teeth Whitening',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic.',
                image: whitening,
                bgClass: 'bg-gradient-to-r from-primary to-secondary text-white border-0'
            }
        ]


    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid mt-5 gap-8 grid-cols-1 md:grid-cols lg:grid-cols-3'>
                {
                    servicesData.map(serv => <Service
                        key={serv.id}
                        service={serv}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;