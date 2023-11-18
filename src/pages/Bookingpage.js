import React from 'react';
import './bookingpage.css'
import restaurantpix from '../assets/restaurant.jpg'
import BookingForm from '.././components/reserveTableForm/BookingForm.js'

function Bookingpage(props){
    return(
        <div className='bookingpage'>
           <div className='bookingpage-image'> <img src={restaurantpix} alt='restaurant' /> </div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
        
    )
}

export default Bookingpage;