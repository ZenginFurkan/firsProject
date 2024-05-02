import {  createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  is_tagsPage: false
};

// Slice
const tagsPageSlice = createSlice({
  name: 'tagsPage',
  initialState,
  reducers: {
    setIsTagsPage(state, action) {
      state.is_tagsPage = action.payload;
    }
  }
});

// Actions
export const { setIsTagsPage } = tagsPageSlice.actions;

export default tagsPageSlice.reducer;