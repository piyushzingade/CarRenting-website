import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import CarsPages from "./pages/Cars.pages";
import DetailPage from "./pages/CarDetailsPage";
import Layout from "./components/Layout";
import PackagesPage from "./pages/Packages.page";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/cars" element={<CarsPages />} />
          <Route path="/car/:id" element={<DetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />

          {/* <Route path="/booking" element={<BookingPage />} /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
