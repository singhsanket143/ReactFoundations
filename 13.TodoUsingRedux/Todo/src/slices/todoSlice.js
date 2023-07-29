import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (todos, action) => {
            todos.value.push({id: action.payload.id, title: action.payload.title});
        },
        removeTodo: (todos, action) => {
            todos.value = todos.value.filter(todo => todo.id != action.payload); 
        },
        editTodo: (todos, action) => {
            todos.value = todos.value.map((todo) => {
                if(todo.id == action.payload.id) {
                    todo.title = action.payload.title
                }
                return todo;
            });
        }
    }
});


export default todoSlice;