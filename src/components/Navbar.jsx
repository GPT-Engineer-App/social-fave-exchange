import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">Faving</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/register" className="text-white">Register</Link>
        <Link to="/login" className="text-white">Login</Link>
        <Link to="/profile" className="text-white">Profile</Link>
        <Link to="/service-listings" className="text-white">Service Listings</Link>
        <Link to="/search-discovery" className="text-white">Search & Discovery</Link>
        <Link to="/booking-scheduling" className="text-white">Booking & Scheduling</Link>
        <Link to="/reviews-ratings" className="text-white">Reviews & Ratings</Link>
        <Link to="/messaging-system" className="text-white">Messaging System</Link>
        <Link to="/payment-integration" className="text-white">Payment Integration</Link>
        <Link to="/user-dashboard" className="text-white">User Dashboard</Link>
        <Link to="/admin-panel" className="text-white">Admin Panel</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;