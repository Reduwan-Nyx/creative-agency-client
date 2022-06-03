import React from 'react';
import back from '../../../images/back.png'
import banner from '../../../images/logos/Frame.png'
const Banner = () => {
    return (
        <section style={{
          background: `url(${back})`
        }}>
          <div class="hero min-h-screen ">
           
           <div class="hero-content flex-col lg:flex-row-reverse ">
             <img width={624} src={banner} alt=""/>
             <div>
               <h1 class="text-5xl font-bold">Let’s Grow Your <br /> 
   Brand To The <br />
   Next Level</h1>
               <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat </p>
               <button class="btn btn-button px-10">Hire Us</button>
             </div>
           </div>
         </div>
        </section>
    );
};

export default Banner;