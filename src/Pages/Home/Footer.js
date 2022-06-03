import React from 'react';
import footer from '../../images/footer.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`
        }} class="footer p-10 text-base-content">
        <div>
            <h2 className='footer-text'>Let us handle your <br /><span className='mb-3'> project, professionally.</span></h2>
            <p className='mt-3'><>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</></p>
        </div>
        <div> 
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label> 
            <div class="relative">
              <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
              <button class="btn btn-button  absolute top-0 right-0 rounded-l-none">Send</button>
            </div>
            
          </div>
          <div className='mt-5'>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
        </div>
        
      </footer>
    );
};

export default Footer;