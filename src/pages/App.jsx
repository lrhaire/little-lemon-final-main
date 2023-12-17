import Home from "./Home";
import Booking from "./Booking";
import {Route, Routes} from "react-router-dom";
import Error from './Error';

function App() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />}>
          <Route path="reservations" element={<Booking />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

