import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

export const createAppId = createAsyncThunk(
  'books/createAppId',
  async (name, thunkAPI) => {
    try {
      const resp = await client.post('/apps/');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('app not created');
    }
  },
);
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (name, thunkAPI) => {
    try {
      const resp = await client.get('apps/JWCmt9iaJ4Qaad541Qcl/books');

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const createNewBook = createAsyncThunk(
  'books/createNewBook',
  async (name, thunkAPI) => {
    try {
      const resp = await client.post('/apps/JWCmt9iaJ4Qaad541Qcl/books', name);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);
export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, thunkAPI) => {
    try {
      const resp = await client.delete(`/apps/JWCmt9iaJ4Qaad541Qcl/books/${bookId}`, bookId);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('The book was deleted successfully!');
    }
  },
);

const initialState = {
  books: [],
  isLoading: true,
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: Object.entries(action.payload).map(([key, arr]) => arr.map((item) => {
          const itemCopy = { ...item };
          itemCopy.id = key;
          return itemCopy;
          // flatten the resulting array of arrays into a single array.
        })).flat(),
      }))

      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books.filter((book) => book.id !== action.meta.arg)],
      }))
      .addCase(createNewBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books, action.meta.arg],
      }));
  },
});

export default booksSlice.reducer;
