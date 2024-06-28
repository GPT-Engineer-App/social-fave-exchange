import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container flex justify-between items-center">
      <div className="text-lg font-bold">Faving</div>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/service-listings">Service Listings</Link>
        <Link to="/search-discovery">Search & Discovery</Link>
        <Link to="/booking-scheduling">Booking & Scheduling</Link>
        <Link to="/reviews-ratings">Reviews & Ratings</Link>
        <Link to="/messaging-system">Messaging System</Link>
        <Link to="/payment-integration">Payment Integration</Link>
        <Link to="/user-dashboard">User Dashboard</Link>
        <Link to="/admin-panel">Admin Panel</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;