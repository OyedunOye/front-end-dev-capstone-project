import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo  from '../../assets/logotop.jpg';
import { Link } from 'react-router-dom';

// I have used icons from react icons, I first needed to 
//install react icons with npm before I can install and use in my code. Just a reminder for myself.
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='litmon_navbar  section__margin'>
      <div className='litmon_navbar-container'>
        <div className='litmon_navbar-container_img'>
          <img src={logo} alt='logo' />
        </div>
        <div className='litmon_navbar-container-nav'>
          <nav>
            <Link to="/" >Home </Link>
            <a href="/#about" >About </a>
            <a href="/#menu" >Menu </a>
            <Link to="/booking-page" >Reservations </Link>
            <a href="/#orderOnline" >Order Online </a>
            <a href="/#login" >Login </a>
          </nav>
        </div>
        <div className='litmon_navbar-menu'>
      {toggleMenu
          ?<RiCloseLine color='000' size={27} onClick={()=> setToggleMenu(false)}/>
          :<RiMenuFill color='000' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='litmon_navbar-menu_container scale-up-center'>
            <div className='litmon_navbar-menu_container-links' >
              <nav>
              <Link to="/" >Home </Link>
              <a href="/#about" >About </a>
              <a href="/#menu" >Menu </a>
              <Link to="/booking-page" >Reservations </Link>
              <a href="/#orderOnline" >Order Online </a>
              <a href="/#login" >Login </a>
              </nav>
            </div>
          </div>

        )}
      </div>
      </div>
      
    </div>
  )
}

export default Navbar