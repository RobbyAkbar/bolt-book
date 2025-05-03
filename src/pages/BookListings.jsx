import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LucideBook } from 'lucide-react';
import axios from 'axios';

function BookListings() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://potterapi-fedeperin.vercel.app/en/books')
      .then(response => {
        const booksWithIndex = response.data.map((book, index) => ({
          ...book,
          index: index
        }));
        setBooks(booksWithIndex);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Book Listings</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map(book => (
          <li key={book.number} className="border p-4 rounded shadow">
            <Link to={`/book/${book.number}`}>
              <img src={book.cover} alt={book.title} className="mb-2" />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p>{book.originalTitle}</p>
              <p>Release Date: {book.releaseDate}</p>
              <p>Pages: {book.pages}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookListings;
