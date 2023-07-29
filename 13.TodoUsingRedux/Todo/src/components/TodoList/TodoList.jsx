import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import TodoInput from '../TodoInput/TodoInput';
function TodoList() {
    const todoList = useSelector((state) => state.todos.value);

    return (
        <>
            <TodoInput />
            {todoList && todoList.map((todo) => <Todo id={todo.id} title={todo.title} key={todo.id} />)}
        </>
    )
}

export default TodoList;