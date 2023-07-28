import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const store = createStore(combineReducers(todoReducer), {});

export default store;