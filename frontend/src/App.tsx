import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/booking" element={<BookingPage />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
