import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
    //bconst todoItems = props.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />);
    const [todoItems, setTodoItems] = useState([{data: 'todo1', id: '123'}, {data: 'todo2', id: 213}]);
    const [inputText, setInputText] = useState("");
    function deleteTodo(id) {
        let remainingTodos = todoItems.filter((todo) => todo.id != id);
        setTodoItems(remainingTodos);
    }
    function editTodo(id, newTodo) {
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id == id) todo.data = newTodo;
            return todo;
        });
        setTodoItems(updatedTodos);
    }
    return (
        <>
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
            />
            <button 
                onClick={() => setTodoItems([...todoItems, {data: inputText, id: (new Date()).getTime()}])}
            >Add todo</button>
            <ul> 
                {todoItems.map((todo) => <TodoItem 
                                            todo={todo}
                                            key={todo.id} 
                                            delete={() => deleteTodo(todo.id)} 
                                            edit={(newTodo) => editTodo(todo.id, newTodo)}
                                            />)} 
            </ul>
        </>
    )
}

export default Todo;