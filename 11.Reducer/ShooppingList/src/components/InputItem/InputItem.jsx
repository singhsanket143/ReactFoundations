// CSS Imports
import './InputItem.css';

function InputItem() {

    return (
        <div className="item-input-wrapper">
            <input 
                className='item-input'
                type="text"
                placeholder="Add An Item..."
            />
            <button className='add-item-button'>
                Add
            </button>
        </div>
    );

}   

export default InputItem;