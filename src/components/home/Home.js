import React from 'react'
import restaurant from '../../assets/restauranfood.jpg'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='litmon_home-outcover'>
    <div className='litmon_home' id='home'>
      <div className='litmon_home-container section__padding'>
        <div className='litmon_home-container_text'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking-page">
          <button type='button'>Reserve a Table</button>
          </Link>
        </div>
        <div className='litmon_home-container_img'>
          <img src={restaurant}  alt='Little Lemon Restaurant' />
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Home