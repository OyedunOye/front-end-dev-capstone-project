import React from 'react'
import './about.css';
import pixA from '../../assets/Mario_and_Adrian_A.jpg'
import pixB from '../../assets/Mario_and_Adrian_b.jpg'

const About = () => {
  return (
    <div className='litmon_about section__margin' id='about'>
      <div className='litmon_about-text'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Meet the owners: Marie and Adrian, who are highly inspired to bring you the best of the Middle East cuisines. We have been passionate about cooking since childhood and you can only expect the best. 
Bon appetite!</p>
      </div>
      <div className='litmon_about-pix'>
        <img src={pixA} alt='Adrian and Mario' />
        <img src={pixB} alt='Adrian and Mario' />
      </div>
    </div>
  )
}

export default About