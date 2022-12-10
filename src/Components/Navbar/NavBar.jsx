import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';



const NavBar = () => {

  const [showLink, setShowLink] = useState(false);



  return (
    <>
     <nav className='nav'> 

     <a href='/home' > Random Cricket </a>

     <ul className={showLink? 'mobileLinks':'links'}>

      <li> <NavLink  className='navLink' to="/home" >Home</NavLink> </li>

     <li>  <NavLink  className='navLink' to="/players" >players</NavLink> </li>

      <li> <NavLink  className='navLink' to="/about" >About</NavLink> </li>
      
     </ul>

     {/* hamburger menu bar */}

    <div className='hamburgerMenu' >
      <button  onClick={()=> setShowLink(!showLink)} >
        <GiHamburgerMenu/>
      </button>
    </div>

     </nav>
    </>
  )
}

export default NavBar;
