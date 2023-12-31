import React, { useReducer } from 'react'
import Bookingpage from '../../pages/Bookingpage.js';
import ConfirmedBooking from "../reserveTableForm/ConfirmedBooking";
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../pages/Homepage.js';



function Main() {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
          return result;
      };
      const submitAPI = function(formData) {
          return true;
      };

    const initializeTimes = {
        availableTimes: fetchAPI(new Date())

    };

    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    // Define the reducer function to handle state changes
    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    };
    const navigate = useNavigate();

    function submitForm (formData) {
        if (submitAPI(formData)) {
            console.log(formData);
            navigate("/confirmed")
        }
    }

  return (
    <main>
        
            <Routes>
                <Route path="/" element={<HomePage />}> </Route>
                <Route path="/booking-page" element={<Bookingpage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking/> }></Route>
            </Routes>
        
    </main>
  )
}

export default Main;