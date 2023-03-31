import Book from './Book';

const books = [
  {
    id: 1,
    title: 'the hunger games',
    author: 'suzanne spark',
  },
  {
    id: 2,
    title: 'the expendables',
    author: 'suzanne spark',
  },
];

const Books = () => (
  <>
    <ul>
      {books.map((item) => <Book book={item} key={item.id} />)}
    </ul>
  </>

);

export default Books;
