import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { submitAPI } from "../utils/Api";
import BookingForm from "../components/BookingForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/booking.css";

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
      ];

    default:
      return state;
  }
}

// initial state for availableTimes
function initializeTimes() {
  return [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];
}

export default function Booking() {

 const navigate = useNavigate();
  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  return (
    <>
    <Nav />
    <div className="booking"><h1>Book Now</h1>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
    <Footer />
  </>
  )
};
