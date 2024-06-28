import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ServiceListings from "./pages/ServiceListings.jsx";
import SearchDiscovery from "./pages/SearchDiscovery.jsx";
import BookingScheduling from "./pages/BookingScheduling.jsx";
import ReviewsRatings from "./pages/ReviewsRatings.jsx";
import MessagingSystem from "./pages/MessagingSystem.jsx";
import PaymentIntegration from "./pages/PaymentIntegration.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/service-listings" element={<ServiceListings />} />
          <Route exact path="/search-discovery" element={<SearchDiscovery />} />
          <Route exact path="/booking-scheduling" element={<BookingScheduling />} />
          <Route exact path="/reviews-ratings" element={<ReviewsRatings />} />
          <Route exact path="/messaging-system" element={<MessagingSystem />} />
          <Route exact path="/payment-integration" element={<PaymentIntegration />} />
          <Route exact path="/user-dashboard" element={<UserDashboard />} />
          <Route exact path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;