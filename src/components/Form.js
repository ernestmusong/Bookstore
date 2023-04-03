import React from 'react';

function Form() {
  return (
    <>
      <form>
        <h3>book title</h3>
        <div className="inputs-wrap">
          <label id="title-label" htmlFor="title">
            <input type="text" id="title" required placeholder="Book title" />
          </label>
          <label id="author-label" htmlFor="author">
            <input type="text" id="author" required placeholder="Author" />
          </label>
          <button className="submit-btn" type="submit">Add book</button>
        </div>
      </form>
    </>
  );
}

export default Form;
