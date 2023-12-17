import "../styles/hero.css";
import { Link } from 'react-router-dom';

export default function Hero() {

    return (
        
    <header className="hero">
    <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

            <Link to="/reservations">
            <button aria-label="On Click">Reserve a Table</button>
          </Link>

            <div className="hero-img">
            <img src="/assets/hero.jpg" aria-label="server holding dish"></img>
            </div>
        </section>
    </header>
    )
}