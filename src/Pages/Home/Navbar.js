import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './Navbar.css'
import banner from '../../images/back.png'
const Navbar = () => {
    const menuItem = (
        <>
        <li>
            <Link to="/home">Home</Link>
            <Link to="/portfolio">Our Portfolio</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact">Contract Us </Link>
        </li>
        </>
    )
    return (
        <div style={{
          background: `url(${banner})`
        }} class="navbar ">
            
  <div class="navbar-start">
      
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
         
       {menuItem}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl mx-20 mt-2"><img width={150} src={logo} alt="" /></a>
  </div>
  <div class="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0  mx-20 font-medium">
      {menuItem}
    </ul>
  </div>

</div>
    );
};

export default Navbar;