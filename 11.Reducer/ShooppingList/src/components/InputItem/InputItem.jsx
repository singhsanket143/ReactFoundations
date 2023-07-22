// CSS Imports
import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';

// Context import
import { ShoppingDispatchContext } from '../../providers/ShoppingContext';

// utils import
import { showSuccess } from '../../utils/showToasts';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

function InputItem() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useContext(ShoppingDispatchContext);

    const handleFormSubmission = (data) => {
        dispatch({
            type: 'add_item',
            itemName: data.item
        })
        showSuccess('Successfully added item');
    }

    return (
        <div className="item-input-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input 
                    className='item-input'
                    type="text"
                    placeholder="Add An Item..."
                    name="item"
                    {...register("item", { required: true, minLength: 3 })} 
                />

                <button className='add-item-button'>
                    Add
                </button>
                <div>
                    {errors.item && errors.item.type == 'required' && <p>Item is missing </p>}  
                    {errors.item && errors.item.type == 'minLength' && <p>Item name cannot be less than 3 </p>}    
                </div>
            </form>
            

        </div>
    );

}   

export default InputItem;