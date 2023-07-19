import './Form.css';
import Input from '../Input/Input';
import { useContext } from 'react';
import { FormContext } from '../../providers/FormContext';
function Form() {
    const {formInput} = useContext(FormContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
    }

    return (
        <div>
            New form <br/>

            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <Input 
                        id="email-input"
                        type="text"
                        label="email"
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <Input 
                        id="password-input"
                        type="password"
                        label="password"
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>
        </div>
    )
}

export default Form;