import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import todoSlice from '../../slices/todoSlice';
function Todo({ title, id }) {
    const dispatch = useDispatch();
    // 
    const { editTodo, removeTodo} = todoSlice.actions;
    const actions = bindActionCreators({ removeTodo, editTodo }, dispatch);

    const [isEditting, setIsEditting] = useState(false);
    const [edittedText, setEdittedText] = useState(title);
    
    function updateTodo() {
        if(isEditting) {
            // we were already editting
            actions.editTodo({id: id, title: edittedText});
            setIsEditting(false);
        } else {
            setIsEditting(true);
        }
    }

    return (
        <div>
           {(isEditting) ? 
                    <input 
                        value={edittedText} 
                        onChange={e =>setEdittedText(e.target.value)} 
                    /> : 
                    edittedText}
            <button onClick={() => actions.removeTodo(id)}>Delete</button>
            <button onClick={updateTodo}>{(isEditting) ? 'Save' : 'Edit'}</button>
        </div>
    );
}

export default Todo;

// 1. implement the deletion of todos
// 2. try to replace calling dispatch directly (may be bindActionCreator ) ??
// 3. Implement edit todo functionality