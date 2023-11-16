import React from 'react';
import './footer.css'
import logo from '../../assets/logotop.jpg'
import { RiFacebookCircleFill, RiInstagramLine, RiWhatsappLine  } from "react-icons/ri";

const footer = () => {
  return (
    <footer className='litmon_footer'>
      <div className='litmon_footer-cont section__margin'>
        <div className='litmon_footer-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='footer_nav'>
          <h2> Doormat Navigation</h2>
           
              <a href="/#home" >Home </a>
              <a href="/#about">About </a>
              <a href="/#menu">Menu </a>
              <a href="/#reservations" >Reservations </a>
              <a href="/#orderOnline" >Order Online </a>
              <a href="/#login">Login </a>
            
        </div>
        <div className='footer_contact'>
          <h2> Contact</h2>
                
          <p>Address: Saint Louis Ave, 56-598 Chicago</p>
          <p>Phone number: +12 456 7896 77</p>
          <p>Email: littlelemon@delicious.com</p>
                
        </div>
        <div className='footer_socialmedia'>
          <h2>Social media links</h2>
          <nav>
            
              <RiInstagramLine />
              <RiFacebookCircleFill />
              <RiWhatsappLine />
            
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default footer