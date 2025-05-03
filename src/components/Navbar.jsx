import React from 'react';
import { Link } from 'react-router-dom';
import { LucideBook, LucideUser } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          <LucideBook size={24} /> BookMarket
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/books" className="text-white">Books</Link>
          </li>
          <li>
            <Link to="/author/1" className="text-white">Authors</Link>
          </li>
          <li>
            <Link to="/payment" className="text-white">Payment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
