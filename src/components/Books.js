import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from 'redux/books/booksSlice';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks('random'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <ul className="books">
      {books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
  );
};

export default Books;
