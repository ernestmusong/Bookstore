import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => {
      const status = 'Under construction';
      return status;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
