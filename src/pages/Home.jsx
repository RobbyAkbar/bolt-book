import React from 'react';
import { Link } from 'react-router-dom';
import { LucideBook, LucideUser } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to BookMarket</h1>
        <p className="text-lg">Buy and sell your digital books here.</p>
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Get Started</Link>
      </div>

      {/* Featured Books Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Featured Books</h2>
        <div className="flex space-x-4 mt-4">
          {/* Book Cards */}
          <div className="bg-white p-4 shadow-md rounded">
            <img src="book1.jpg" alt="Book 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Book Title 1</h3>
            <p>Brief description of the book.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <img src="book2.jpg" alt="Book 2" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Book Title 2</h3>
            <p>Brief description of the book.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <img src="book3.jpg" alt="Book 3" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Book Title 3</h3>
            <p>Brief description of the book.</p>
          </div>
        </div>
        <Link to="/books" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View All Books</Link>
      </div>

      {/* About Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-4">
          BookMarket is a platform dedicated to connecting readers and authors, providing a seamless experience for buying and selling digital books. Our mission is to foster a community that celebrates literature and supports authors worldwide.
        </p>
        <img src="mission.jpg" alt="Mission Illustration" className="mt-4 w-1/2 mx-auto rounded" />
      </div>

      {/* Testimonials Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <div className="mt-4 space-y-4">
          <blockquote className="italic">
            "BookMarket has transformed the way I discover and enjoy books. The platform is user-friendly and the selection is amazing!"
          </blockquote>
          <blockquote className="italic">
            "As an author, I love how BookMarket helps me connect with readers. The support is incredible!"
          </blockquote>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 w-full p-4 text-center text-white">
        <ul className="flex justify-center space-x-4 mb-4">
          <li>
            <Link to="/about" className="text-white">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Contact Us</Link>
          </li>
          <li>
            <Link to="/privacy" className="text-white">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms" className="text-white">Terms of Service</Link>
          </li>
        </ul>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-white">Facebook</a>
          <a href="https://twitter.com" className="text-white">Twitter</a>
          <a href="https://instagram.com" className="text-white">Instagram</a>
        </div>
        <form className="mt-4">
          <input type="email" placeholder="Enter your email" className="p-2 rounded" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </form>
      </footer>
    </div>
  );
}

export default Home;
