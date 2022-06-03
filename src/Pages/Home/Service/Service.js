import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import Services from '../Services/Services';
import './Service.css'
const Service = () => {
    const services = [
        {
            _id: 1,
            name: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img: service1
        }, {
            _id: 2,
            name: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
          
            img: service2
        }, {
            _id: 3,
            name: 'Web development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            
            img: service3
        }
    ]
    return (
        <div className=' my-28 text-center'>
            <h2 className='service-text'>Provide Awesome <span className='orange'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                {
                    services.map(service => <Services
                    key={service._id}
                    service={service}
                    ></Services>)
                }
            </div>
            
        </div>
    );
};

export default Service;