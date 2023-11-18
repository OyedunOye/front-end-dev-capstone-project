import { RiCheckboxCircleFill } from "react-icons/ri";
import './confirmedBooking.css'
const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <RiCheckboxCircleFill size={50}/>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
