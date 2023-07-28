import { removeTodo } from '../../actions/index';
import { useDispatch } from 'react-redux';
function Todo({ title, id }) {
    const dispatch = useDispatch();
    return (
        <div>
           {title}
            <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
        </div>
    );
}

export default Todo;

// 1. implement the deletion of todos
// 2. try to replace calling dispatch directly (may be bindActionCreator ) ??
// 3. Implement edit todo functionality