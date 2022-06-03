import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg  shadow-xl">
            <div class="card-body">
   
  
   
 
            <div className='flex items-center'>
            <div class="avatar">
  <div class="w-24 mask mask-squircle mr-5">
    <img src={review.img} alt=""/>
  </div>

        <div className='mt-10'>
        <h2>{review.name}</h2>
    <p>{review.works}</p>
        </div>
  </div>
  
</div>
<p><small>{review.review}</small></p>
</div>
</div>
    );
};

export default Review;