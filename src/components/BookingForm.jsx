import { useState, useEffect } from "react";
import "../styles/booking.css";
import { fetchAPI } from "../utils/Api";

export default function BookingForm({ submitForm }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [availableTimesForDate, setAvailableTimesForDate] = useState([]);

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }
    
useEffect(() => {
  if (date) {
    const selectedDate = new Date(date);

    fetchAPI(selectedDate)
      .then((times) => {
        setAvailableTimesForDate(times);
        if (times.length > 0) {
          setTime(times[0]);
        }
      })
      .catch((error) => {
        console.error("Unable to locate available times:", error);
      });
  }
}, [date]);

     const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }
  
    return (
    <main className="form-wrapper">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <fieldset>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Full Name" name="name" value={formData.name} onChange={handleFormChange} required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleFormChange} required />
          </div>

          <div className="field"> 
            <label htmlFor="date">Select Date</label>
            <input type="date" id="booking-date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
          </div>

          <div className="field">
            <label htmlFor="time">Select Time</label>
            <select id="booking-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimesForDate.map((timeOption, index) => (
              <option key={index} value={timeOption} >
                  {timeOption}
              </option>
                ))}
              </select>
           </div>

          <div className="field">
              <label htmlFor="guests">Guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" required value={formData.noOfGuests} onChange={handleFormChange} />
          </div>

              <div className="field">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                <option>None</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
          </div>

          <div className="btn-container">
          <button type="submit" value="Reserve" aria-label="submit button">Reserve</button>
          </div>
          </fieldset>
      </form>
      </div>
    </main>
  )
}