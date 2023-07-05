function handleClick(todo) {
    console.log(todo)
    alert(`${todo.data} clicked`)
}

function TodoItem(props) {

    return <li onClick={() => handleClick(props.todo)}>{props.todo.data}</li>
}

export default TodoItem;