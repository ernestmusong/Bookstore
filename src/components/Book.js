import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <>
      <li className="book">
        <div className="title-sec">
          <p className="action">{book.category}</p>
          <h3 className="title">{book.title}</h3>
          <p className="author">{book.author}</p>
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
            <button id="edit-btn" className="button" type="button">edit</button>
          </div>
        </div>
        <div className="second-child">
          <div className="status">
            {/* PROGRESS BAR */}
            <div className="progress-wrapper">
              <div className="progress-container">
                <CircularProgressbar
                  value={80}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: 'linear-gradient(to bottom, #307bbe, #379cf6)',
                    trailColor: '#e8e8e8',
                  })}
                />
              </div>
              <div className="percentage">
                <h3>80%</h3>
                <p>Completed</p>
              </div>
            </div>
            {/* END PROGRESS BAR */}
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
