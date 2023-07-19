import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef } from 'react';
import { FormContext } from '../../providers/FormContext';

import emailValidator from '../../helper/emailValidator';
import passwordValidator from '../../helper/passwordValidator';

function Form() {
    const {formInput} = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // we have access to formInput, that means validations can occur here
        handleInvalidEmail();
        handleInvalidPassword();
    }

    const handleInvalidEmail = () => {
        console.log("called email", formInput)
        if(!emailValidator(formInput.email)) {
            emailRef.current.setInvalid();
            emailRef.current.shake();
        }
    }

    const handleInvalidPassword = () => {
        console.log("called password", formInput)

        if(!passwordValidator(formInput.password)) {
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
        }
    }

    return (
        <div>
            New form <br/>

            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                    <Input 
                        id="email-input"
                        type="email"
                        label="email"
                        ref={emailRef}
                        checkOnBlur={handleInvalidEmail}
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <Input 
                        id="password-input"
                        type="password"
                        label="password"
                        ref={passwordRef}
                        checkOnBlur={handleInvalidPassword}
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>
        </div>
    )
}

export default Form;