import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <>
      <li className="book">
        <div className="title-sec">
          <p className="action">{book.category}</p>
          <h3 className="title">{book.title}</h3>
          <p className="author">{book.author}</p>
          <div>
            <button id="commentsbtn" className="button" type="button">comments</button>
            <button onClick={dispatch(removeBook(book.item_id))} id="remove-btn" className="button" type="button">remove</button>
            <button id="edit-btn" className="button" type="button">edit</button>
          </div>
        </div>
        <div className="second-child">
          <div className="status">
            {/* PROGRESS BAR */}
            <div className="ui-widgets">
              <div className="ui-values" />
            </div>
            {/* END PROGRESS BAR */}

            <div className="percentage">
              <h3>80%</h3>
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
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Book;
