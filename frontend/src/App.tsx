import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import CarsPages from "./pages/Cars.pages";
import Layout from "./components/Layout";
import PackagesPage from "./pages/Packages.page";
import CarDetailPage from "./pages/CarDetailsPage";
import PackageDetailPage from "./pages/PackageDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/cars" element={<CarsPages />} />
          <Route path="/car/:id" element={<CarDetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} />

          {/* <Route path="/booking" element={<BookingPage />} /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
