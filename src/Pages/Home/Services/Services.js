import React from 'react';

const Services = ({service}) => {
    return (
        <div class="card ">
        <figure class="px-10 pt-10">
          <img width={74} src={service.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{service.name}</h2>
          <p>{service.description}</p>
         
        </div>
      </div>
    );
};

export default Services;