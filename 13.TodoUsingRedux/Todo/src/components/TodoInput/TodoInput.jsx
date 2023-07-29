import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from '../../actions/index';
import todoSlice from "../../slices/todoSlice";
function TodoInput() {
    const [todoText, setTodoText] = useState('');
    
    const todoList = useSelector((state) => {
        return state.todos.value
    });
    const dispatch = useDispatch();

    const { addTodo } = todoSlice.actions; 

    function insertTodo() {
        const lastTodoId = (todoList.length == 0) ? 0 : todoList[todoList.length - 1].id;
        dispatch(addTodo({title: todoText, id: lastTodoId+1}));
        setTodoText('');
    }
    return (
        <>
            <input 
                type="text"
                placeholder="add todo .... "
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={insertTodo}>Add todo</button>
        </>
    )
}

export default TodoInput;