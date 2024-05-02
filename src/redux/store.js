import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice/ToDoSlice";
import searchReducer from "./todoSlice/searchQuery";
import tagsPageReducer from "./pagecontrol/PageControl";
import tagsReducer from "./todoSlice/tagsSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
    search: searchReducer,
    tagsPage: tagsPageReducer,
    tags:tagsReducer
  },
});



export default store;
