import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

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
      window.location.reload();
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
      window.location.reload();
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('The book was deleted successfully!');
    }
  },
);

const initialState = {
  books: {},
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
        books: action.payload,
      }))
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      }));
  },
});

export default booksSlice.reducer;
