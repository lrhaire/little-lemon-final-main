import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <>
    
    <Nav />

    <div className="confirmed">
      <h1>Your Booking is Confirmed</h1>
      <h2>You will receive an email from us shortly with your reservation details</h2>
      <p>Thank you for Choosing Little Lemon!</p>
    </div>

    <Link to="/">
      <div className="confirmed-btn">
        <button aria-label="On Click">Back to Home</button>
        </div>
    </Link>

    <Footer />

    </>
  );
};