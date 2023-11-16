import React from 'react'
import { RiRidingLine } from 'react-icons/ri';
import './menucard.css'
import bruchetta from '../../assets/bruchetta.jpg'
import greekSalad from '../../assets/greekSalad.jpg'
import lemonDessert from '../../assets/lemon dessert.jpg'

let menuList=[
  {
    dish: 'Greek Salad',
    pix: greekSalad,
    price: '$12.89',
    description: 'The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    order:'Order a delivery'
  }
  ,
  {
    dish:'Bruchetta',
    pix: bruchetta,
    price: '$9.99',
    description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    order:'Order a delivery'
  },

  {
    dish:'Lemon Desert',
    pix: lemonDessert,
    price: '$6.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is asauthentic as can be imagined.',
    order:'Order a delivery'
  }
]

const Menucard = () => {

  return (
    
      <div className='litmon_menucard' >
        {menuList.map(({dish, pix, price, description})=>(
          <div className='litmon_menucard-box'>
            <div className='litmon_menucard-box-meal'>
                <img src= {pix} key={dish} alt={dish}  />
            </div>
            <div className='litmon_menucard-innermagin'>
            <div className='litmon_menucard-box_heading'>
              <h4 key={dish}>{dish}</h4>
              <p key={dish}>{price}</p>
            </div>
            <div className='litmon_menucard-box_desc'>
              <p key={dish} >{description}</p>
            </div>
            <div className='litmon_menucard-box_bom'>
              <a href='#order'>Order a delivery</a>
              <RiRidingLine />
            </div>
            </div>
          </div>
      ))}
      
      </div> 
  )
}

export default Menucard