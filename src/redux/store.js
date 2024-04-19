// store.js

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice/ToDoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
