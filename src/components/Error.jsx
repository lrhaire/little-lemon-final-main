import { Link } from "react-router-dom";
import "../styles/error.css";   


export default function Error() {
    return (
        <div>
            <div className="error-container">
            <h1>Oops!<br />  Page Not Found</h1>
            <h2>Here are some helpful links:</h2>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li> <Link to='/reservations'>Reservations</Link></li>
            </ul>
            </div>
        </div>
    )
}

{/* This error component is an error boundary in case route cannot be found. */}