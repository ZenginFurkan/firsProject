import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchTags = createAsyncThunk("tags/fetchTags", 
  async () => {
  const response = await api.get("/tags");
  return response.data;
});


const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
})

export default tagsSlice.reducer;