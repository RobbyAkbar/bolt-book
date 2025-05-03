import React from 'react';
import { Link } from 'react-router-dom';
import { LucideBook, LucideUser } from 'lucide-react';

function Navbar() {
  return (
      <nav className="bg-gray-800 w-full p-4 flex justify-between items-center">
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
          <li>
            <input type="text" placeholder="Search..." className="p-2 rounded" />
          </li>
          <li>
            <button className="text-white">Login</button> / <button className="text-white">Register</button>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
