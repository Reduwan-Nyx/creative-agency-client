import React from 'react';
import company1 from '../../../images/logos/slack.png'
import company2 from '../../../images/logos/google.png'
import company3 from '../../../images/logos/uber.png'
import company4 from '../../../images/logos/netflix.png'
import company5 from '../../../images/logos/airbnb.png'
import Companies from '../Companies/Companies';
const Company = () => {
    const companies = [
        {
            _id: 1,
            img: company1
        }, {
            _id: 2,
          
            img: company2
        }, {
            _id: 3,
            
            img: company3
        },{
            _id: 4,
            img: company4
        },{
            _id: 5,
            img: company5
        },
    ]
    return (
        <div className=' my-28 text-center'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5'>
            {
                companies.map(company => <Companies 
                key={company._id}
                company={company}
                ></Companies>)
            }
        </div>

        </div>
        
    );
};

export default Company;