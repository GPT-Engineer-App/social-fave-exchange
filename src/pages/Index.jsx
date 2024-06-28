import React from 'react';
import heroImage from '../public/images/hero.jpg';

const Index = () => (
  <div className="container text-center">
    <img src={heroImage} alt="Hero" className="w-full mb-6" />
    <h1 className="text-5xl font-bold mb-6">Welcome to Faving</h1>
    <p className="text-xl mb-6">Your go-to platform for exchanging services with others.</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
  </div>
);

export default Index;