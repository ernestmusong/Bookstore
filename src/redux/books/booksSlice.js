import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { books } = state;
      books.push({
        item_id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      newState.books.filter((book) => book.id !== action.payload.id);

      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
