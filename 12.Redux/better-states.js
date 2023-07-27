const state = {
    users: [
        {
            id: 1, 
            name: 'Sanket',
        },
        {
            id: 2, 
            name: 'Sarthak',
        },
        {
            id: 3, 
            name: 'JD',
        }
    ],
    todos: [
        {
            userId: 1,
            todoId: 1, 
            name: 'complete deployment'
        },
        {
            userId: 1,
            todoId: 2, 
            name: 'raise the bug'
        },
        {
            userId: 3,
            todoId: 1, 
            name: 'plan the sprint'
        },
        {
            userId: 2,
            todoId: 1, 
            name: 'complete ppt'
        },
        {
            userId: 2,
            todoId: 2, 
            name: 'take interview'
        }
    ]
}

function reducer(state, action) {
    if(action.type == 'EDIT_TODO') {
        let todos = state.todos;
        let newTodos = todos.map(todo => {
            if(todo.todoId == action.todoId && todo.userId == action.userId) {
                todo.name = action.name;
            }
            return todo;
        });
        return newTodos;
    }
}