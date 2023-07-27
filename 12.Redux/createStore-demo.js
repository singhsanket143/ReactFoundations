import { createStore, bindActionCreators } from 'redux';

function demoReducer(state, action) {
    if(action.type == 'add_item') {
        return [...state, {name: action.itemName, quantity: action.itemQuantity}]
    }
    return state;
}

// These functions are called as action creators
const add_item = (name, quantity) => ({
    type: 'add_item', 
    itemName: name, 
    itemQuantity: ((quantity) ? quantity : 1)
});

const initialState = [{name: 'apple'}, {name: 'rice'}];

const store = createStore(demoReducer, initialState);
store.subscribe(() => console.log("State might change"))

const actions = bindActionCreators({ add_item }, store.dispatch);
console.log(actions);
console.log(store.getState());

// the only way to update the store is by dipatching an action

actions.add_item('Banana');

console.log(store.getState());

// store.dispatch(add_item('Mango', 4));
actions.add_item('Mango', 4);

console.log(store.getState());

// store.dispatch({type: 'UNKNOWN'});