import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo  from '../../assets/logotop.jpg';


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
            <a href="/#home" >Home </a>
            <a href="/#about" >About </a>
            <a href="/#menu" >Menu </a>
            <a href="/#reservations" >Reservations </a>
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
                <a href="/#home" >Home </a>
                <a href="/#about" >About </a>
                <a href="/#menu" >Menu </a>
                <a href="/#reservations" >Reservations </a>
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