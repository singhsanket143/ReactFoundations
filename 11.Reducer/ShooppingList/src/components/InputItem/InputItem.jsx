// CSS Imports
import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';

// utils import
import { showSuccess } from '../../utils/showToasts';
import { useForm } from 'react-hook-form';

function InputItem({ addItem }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleFormSubmission = (data) => {
        console.log(data, errors)
        addItem(data.item);
        showSuccess('Successfully added item');
    }

    // useEffect(() => {
    //     console.log(errors)
    //     if(errors.item && errors.item.type == 'required') {
    //         showError('Item cannot be empty')
    //     }
    //     if(errors.item && errors.item.type == 'minLength') {
    //         showError('Item cannot be of less than 3 length')
    //     }
    // }, [errors.item && errors.item.type]);

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