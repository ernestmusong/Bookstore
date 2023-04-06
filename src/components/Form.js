import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createNewBook } from 'redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBook = {
      item_id: uuidv4(),
      title: formData.get('title'),
      author: formData.get('author'),
      category: '',
    };
    dispatch(createNewBook(newBook));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>book title</h3>
        <div className="inputs-wrap">
          <label id="title-label" htmlFor="title">
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Book title"
            />
          </label>
          <label id="author-label" htmlFor="author">
            <input
              type="text"
              id="author"
              name="author"
              required
              placeholder="Author"
            />
          </label>
          <button className="submit-btn" type="submit">Add book</button>
        </div>
      </form>
    </>
  );
}

export default Form;
