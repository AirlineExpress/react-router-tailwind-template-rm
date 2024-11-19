import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-gray-300">レストラン</Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/yakuza" className="text-white hover:text-gray-300">Yakuza</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
