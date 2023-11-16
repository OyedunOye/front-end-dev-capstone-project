import React from 'react'
import './testimonial.css'
import james from '../../assets/James.png';
import sarah from '../../assets/Sarah.jpg';
import matt from '../../assets/Richard.jpg';
import sofia from '../../assets/Sofia.jpg';



import { RiStarLine } from "react-icons/ri";

const data = [
  {
    name: 'James',
    pix: james,
    rating: 5,
    review:'This is the best restaurant I’ve visited in a long while! The staff are amazing!'
  },
  {
    name:'Sarah',
    pix:sarah,
    rating: 5,
    review: 'Simply delicious, I highly recommend this restaurant!'
  },
  {
    name:'Matt',
    pix:matt,
    rating: 4,
    review:'The restaurant is situated in a  really cool environment, ideal for weekend relaxation!'
  },
  {
    name: 'Sofia',
    pix:sofia,
    rating: 4,
    review:'Services are generally okay, took so long to have my food served due to the huge crowd.'
  }
]


const Testimonial = () => {
  return (
    <div className='litmon_testi'>
      <div className='litmon_testi-cont section__padding'>
        <div className='heading '><h2>Testimonials</h2></div>
        <div className='litmon_testi-cont_holder'>
          
            {data.map(({ name, pix, rating, review})=>(
              <div className='litmon_reviewcard'>              <div key={name} className='star'>
                  <RiStarLine/>
                  <RiStarLine/>
                  <RiStarLine/>
                  <RiStarLine/>
                  <RiStarLine/>
                  
              </div>
              <div className='name_pix'>
                <img src={pix} alt={name} />
                <h4>{name}</h4>
              </div>
              <div className='review'>
                <p key={name}>{review}</p>
              </div>
              </div>

            ))}
          </div>
      </div>
    </div>
  )
}

export default Testimonial