import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <ul className="books">
      {books.map((book) => (
        <Book book={book} key={book.item_id} />
      ))}
    </ul>
  );
};

export default Books;
