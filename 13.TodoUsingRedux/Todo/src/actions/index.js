import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../constants/index';

export const addTodo = (todo) => ({type: ADD_TODO, payload: todo});

export const removeTodo = (todoId) => ({type: REMOVE_TODO, payload: todoId});

export const editTodo = (todo) => ({type: EDIT_TODO, payload: todo});