import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from 'redux/books/booksSlice';

const Book = (props) => {
  const { books, book } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(book));
  };
  return (
    <>
      <li className="book">
        <div className="title-sec">
          <p className="action">{books[book][0].category}</p>
          <h3 className="title">{books[book][0].title}</h3>
          <p className="author">{books[book][0].author}</p>
          <div>
            <button id="commentsbtn" className="button" type="button">comments</button>
            <button
              onClick={handleRemoveBook}
              id="remove-btn"
              className="button"
              type="button"
            >
              remove
            </button>
            <button onClick={() => dispatch(getBooks('random'))} id="edit-btn" className="button" type="button">edit</button>
          </div>
        </div>
        <div className="second-child">
          <div className="status">
            {/* PROGRESS BAR */}
            <div className="progress-wrapper">
              <div className="parent">
                <div className="child" />
              </div>
              <h3>80%</h3>
            </div>
            {/* END PROGRESS BAR */}

            <div className="percentage">
              <p>completed</p>
            </div>
          </div>
          <div className="chapter">
            <h3>current chapter</h3>
            <h4>chapter 17</h4>
            <button className="update-progress-btn" type="button">update progress</button>
          </div>
        </div>
      </li>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  books: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Book;
