import reviews from "../components/reviews.js";
import "../styles/testimonials.css";

export default function Testimonials() {

    return (
        <header className="testimonials">
         <section>
         <div className="testimonials-header">
          <h1>What do people say about us?</h1>
          </div>

        <div className="testimonials-cards">
          {reviews.map((review) => (
            <div key={review.id} className="testimonials-items">
            <img src={review.stars} alt="five star rating icons" 
                className="testimonials-stars"/>
                
              <div className="testimonials-cards-header">
                <img src={review.image} alt="image of person reviewing" className="testimonials-reviewer-img"></img>
                
                  <h2>{review.name}</h2>
                  </div>

                  <p className="testimonials-description">{review.description}</p>
            </div>
          ))}
        </div>
        </section>
      </header>
    )
  }