import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LucideBook, LucideUser } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthorProfile from './pages/AuthorProfile';
import BookListings from './pages/BookListings';
import PaymentSystem from './pages/PaymentSystem';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
        <Route path="/books" element={<BookListings />} />
        <Route path="/payment" element={<PaymentSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
