import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import User from "./pages/OrdersPage";
import Home from "./pages/Home";
import CarsPages from "./pages/Cars.pages";
import Layout from "./components/Layout";
import PackagesPage from "./pages/Packages.page";
import CarDetailPage from "./pages/CarDetailsPage";
import PackageDetailPage from "./pages/PackageDetail";
import { ToastContainer } from "react-toastify";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import AuthLayout from "./components/AuthLayout";
import Contact from "./components/Contacts";
import OrdersPage from "./pages/OrdersPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        {/* Routes without Appbar/Footer */}
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <Signin />
            </AuthLayout>
          }
        />

        {/* Routes with Appbar/Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />
        <Route
          path="/cars"
          element={
            <Layout>
              <CarsPages />
            </Layout>
          }
        />
        <Route
          path="/car/:id"
          element={
            <Layout>
              <CarDetailPage />
            </Layout>
          }
        />
        <Route
          path="/packages"
          element={
            <Layout>
              <PackagesPage />
            </Layout>
          }
        />
        <Route
          path="/packages/:id"
          element={
            <Layout>
              <PackageDetailPage />
            </Layout>
          }
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/booking-page" element={<OrdersPage />} />
        <Route 
          path="/bookings" 
          element={
            <Layout>
              <BookingPage />
            </Layout>
          } 
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
