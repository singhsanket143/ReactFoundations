import { createStore } from 'redux';


const state = {
    users: [
        {
            id: 1, 
            name: 'Sanket',
            todos: [
                {id: 1, name: 'complete deployment'},
                {id: 2, name: 'raise the bug'}
            ]
        },
        {
            id: 2, 
            name: 'Sarthak',
            todos: [
                {id: 1, name: 'complete ppt'},
                {id: 2, name: 'take interview'}
            ]
        },
        {
            id: 3, 
            name: 'JD',
            todos: [
                {id: 1, name: 'plan the sprint'},
            ]
        }
    ],
}

// bad code
// function reducer(state, action) {
//     if(action.type == 'EDIT_TODO') {
//         let newTodoData = action.name;
//         const newState = state.map(user => {
//             if(user.id == action.userId) {
//                 let newTodos = user.todos.map(todo => {
//                     if(todo.id == action.todoId) {
//                         todo.name = newTodoData;
//                     }
//                     return todo
//                 })
//                 user.todo = newTodos;
//             }
//             return user;
//         })
//     }
// }