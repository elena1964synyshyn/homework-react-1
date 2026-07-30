import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} from '../api/todosApi';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      return await getTodos();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchTodoById = createAsyncThunk(
  'todos/fetchTodoById',
  async (id, { rejectWithValue }) => {
    try {
      return await getTodoById(id);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todo, { rejectWithValue }) => {
    try {
      return await addTodo({
        ...todo,
        creationDate: new Date().toISOString().slice(0, 10),
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      return await updateTodo(id, todo);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async (id, { rejectWithValue }) => {
    try {
      await deleteTodo(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    editingTodo: null,
    loading: false,
    error: '',
  },
  reducers: {
    clearEditingTodo(state) {
      state.editingTodo = null;
    },
    clearError(state) {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTodoById.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.loading = false;
        state.editingTodo = action.payload;
      })
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTodo.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editTodo.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loading = false;
        const idx = state.items.findIndex(todo => todo.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
        state.editingTodo = null;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeTodo.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearEditingTodo, clearError } = todosSlice.actions;
export default todosSlice.reducer;
