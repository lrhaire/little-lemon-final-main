import "../styles/footer.css";

export default function Footer() {

    return (
    <footer className="">
            <section>
            <div className="footer-logo">
            <img src="/assets/white-logo.png" alt="logo" />
            </div>
            <div className="content"></div>
            <div>
                <h2>Hours of Operation</h2>
            <ul>
                <li><b>Mon - Fri:</b> 2pm - 10pm</li>
                <li><b>Sat:</b> 2pm - 11pm</li>
                <li><b>Sun:</b> 2pm - 9pm</li>
            </ul>
            </div>
            <div>
                <h2>Contact</h2>
            <ul>
            <li>Address: <br/> 23 Michigan Ave, Chicago, IL</li>
                <li>Phone: <br/> 773-843-5692</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>

            <div>
            <h2>Follow Us</h2>
            <ul>
            <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa fa-youtube"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa fa-instagram"></i></a>
            </li>
            </ul>
            </div>
            </section>
        </footer>
    )
}





