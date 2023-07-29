import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log(state)
            state.push({id: action.payload.id, title: action.payload.title});
        },
        removeTodo: (state, action) => {
            state = state.filter((todo) => todo.id != action.payload);
        },
        editTodo: (state, action) => {
            state = state.map((todo) => {
                if(todo.id == action.payload.id) {
                    todo.title = action.payload.title
                }
                return todo;
            });
        }
    }
});

console.log("todoSlice.actions = ", todoSlice.actions);
console.log("todoSlice.reducer = ", todoSlice.reducer);
console.log("todoSlice.inital state", todoSlice.getInitialState());

export default todoSlice;