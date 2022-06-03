import React from 'react';

const Companies = ({company}) => {
    return (
        <div class="card ">
  <figure>
      <img width={120} src={company.img} alt="brands" />
  </figure>
</div>
    );
};

export default Companies;