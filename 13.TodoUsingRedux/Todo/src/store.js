import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice.js';
const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
    devTools: true
});
export default store;