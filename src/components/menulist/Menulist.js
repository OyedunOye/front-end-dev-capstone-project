import React from 'react'
import Menucard from '../menucard/Menucard'
import './menulist.css'

const Menulist = () => {
  return (
    <div className='litmon_menulist section__margin'>
      <div className='litmon_menulist-head'>
        <h1>This week's specials!</h1>
        <button >Online Menu</button>
      </div>
      <Menucard />
    </div>
  )
}

export default Menulist