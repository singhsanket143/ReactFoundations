// CSS Imports
import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';

// utils import
import { showSuccess } from '../../utils/showToasts';
import { useState } from 'react';

function InputItem({ addItem }) {

    const [itemName, setItemName] = useState('');
    return (
        <div className="item-input-wrapper">
            <input 
                className='item-input'
                type="text"
                placeholder="Add An Item..."
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button className='add-item-button'
                onClick={() => {
                    addItem(itemName);
                    setItemName('');
                    showSuccess('Successfully added item')
                }}
            >
                Add
            </button>
        </div>
    );

}   

export default InputItem;