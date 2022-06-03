import React from 'react';
import reviews1 from '../../images/customer-1.png'
import reviews2 from '../../images/customer-2.png'
import reviews3 from '../../images/customer-3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Nash Patrik',
            works: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            img: reviews1
        }, 
        {
            _id:2,
            name: 'Miriam Barron',
            works: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            img: reviews2
        }, {
            _id:3,
            name: 'Bria Malone',
            works: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            img: reviews3
        },
    ]
    return (
        <section className='my-28'>
            <div>
        <h4 className="text-2xl text-center text-text font-bold">Clients <span className='orange'>Feedback</span></h4>
             
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;