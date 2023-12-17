import Home from "./pages/Home";
import Booking from "./pages/Booking";
import {Route, Routes} from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Error from './components/Error';
import "./App.css";

function App() {
  
  return (
    <>
     <Routes>
      <Route>
        <Route path="/" element={<Home />}>
      </Route>

      <Route>
      <Route path="/reservations" element={<Booking />} />
      </Route>

      <Route>
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Route>

      <Route>
          <Route path="*" element={<Error />} />
      </Route>

        </Route>
      </Routes>

    </>
  );
}

export default App;

