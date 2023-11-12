import React from 'react'
import restaurant from '../../assets/restauranfood.jpg'
import './home.css'
const Home = () => {
  return (
    <div className='litmon_home'>
      <div className='litmon_home-container'>
        <div className='litmon_home-container_text section__padding'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button type='button'>Reserve a Table</button>
        </div>
        <div className='litmon_home-container_img'>
          <img src={restaurant}  alt='Little Lemon Restaurant' />
      </div>
      </div>
      
    </div>
  )
}

export default Home