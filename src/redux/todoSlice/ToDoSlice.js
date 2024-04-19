import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api"

// Async Thunk Actions
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const params = { is_deleted: false };
        const response = await api.get("/todos", params);
        return response.data;
    }
);

export const fetchDeletedTodos = createAsyncThunk("todos/fetchDeletedTodos", async () => {
    const params = { is_deleted: true };
    const response = await api.get("/todos", params);
    return response.data;
});

export const fetchAllTodos = createAsyncThunk("todos/fetchAllTodos", async () => {
    const params = { is_deleted: true };
    const response = await api.get("/todos", params);
    return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
    const response = await api.post("/todos", todo);
    return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (todos) => {
    const response = await api.delete(`/todos/${todos.id}`, todos);
    return response.data;

});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
    const response = await api.patch(`/todos/${todo.id}`, todo);
    return response.data;
});

const todosSlice = createSlice({
    name: "todos",
    initialState: { data: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchDeletedTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.filter(todo => todo.is_deleted === true);
            })

            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.data = state.data.filter((todo) => todo.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.data.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
});

export default todosSlice.reducer;
