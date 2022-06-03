import React from 'react';
import carusal1 from '../../images/carousel-1.png'
import carusal2 from '../../images/carousel-2.png'
import carusal3 from '../../images/carousel-4.png'
import carusal4 from '../../images/carousel-5.png'
import back from '../../images/background.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section style={{
          background: `url(${back})`
        }}>
            <div className='py-10'>
              <div className='appoint-text'>
                <h2>Here are some of <span className='orange'>our works</span></h2>
              </div>
            <div class="carousel mx-auto carousel-center  max-w-lg  bg-neutral rounded-box">
  <div class="carousel-item">
      <div id='item1'>
      <img width={465} src={carusal1} class="rounded-box" />
      </div>
  </div> 
  <div class="carousel-item">
    <div id='item2'>
    <img width={465} src={carusal2} class="rounded-box" />
    </div>
  </div> 
  <div class="carousel-item">
    <div id='item3'>
    <img width={465} src={carusal3} class="rounded-box" />
    </div>
  </div> 
  <div class="carousel-item">
   <div id='item4'>
   <img width={465} src={carusal4} class="rounded-box" />
   </div>
  </div> 
</div>
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
            </div>
        </section>
    );
};

export default MakeAppointment;