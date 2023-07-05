import { useState } from "react";
import './TodoItem.css';

function TodoItem(props) {
    const [isFinished, setIsFinshed] = useState(false);
    return (
        <div>
            <li>
               <span className={(isFinished) ? 'todo-done' : 'todo-notdone'}>{props.todo.data}</span> 
            </li>
            <button onClick={() => setIsFinshed(!isFinished)}>{(isFinished) ? 'ReDo' : 'Done'}</button>
        </div>
    );
}

export default TodoItem;