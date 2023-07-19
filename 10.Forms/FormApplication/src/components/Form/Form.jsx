import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../../providers/FormContext';

import emailValidator from '../../helper/emailValidator';
import passwordValidator from '../../helper/passwordValidator';

function Form() {

    const {formInput} = useContext(FormContext);


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null);

    const [step, setStep] = useState(1);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput)
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

    if(step == 1) {
        return (
            <div>
                
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper email-input-wrapper">
                        <Input 
                            id="email-input"
                            type="email"
                            label="email"
                            placeholder="email"
                            ref={emailRef}
                            key={1}
                            checkOnBlur={handleInvalidEmail}
                        />
                    </div>
    
                    <div className="wrapper password-input-wrapper">
                        <Input 
                            id="password-input"
                            type="password"
                            label="password"
                            placeholder="password"
                            ref={passwordRef}
                            key={2}
                            checkOnBlur={handleInvalidPassword}
                        />
                    </div>
    
                    <input id="submit-input" type="submit" />
                </form>

                <button onClick={() => {
                    setStep(step+1)
                }}>
                    Next
                </button>
            </div>
        )
    } else if (step == 2) {
        return (
            <div>
                
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper email-input-wrapper">
                        <Input 
                            id="username-input"
                            type="text"
                            label="username"
                            placeholder="username"
                            ref={usernameRef}
                            key={3}
                            checkOnBlur={() => console.log("empty")}
                        />
                    </div>
    
                    <input id="submit-input" type="submit" />
                </form>
                <button onClick={() => {
                    setStep(step+1)
                }}>
                    Next
                </button>
                <button onClick={() => {
                    setStep(step-1)
                }}>
                    Prev
                </button>
            </div>
        )
    } else if(step == 3) {
        return (
            <div>
                
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper password-input-wrapper">
                        <Input 
                            id="address-input"
                            type="text"
                            label="address"
                            placeholder="address"
                            ref={addressRef}
                            key={4}
                            checkOnBlur={handleInvalidPassword}
                        />
                    </div>
    
                    <input id="submit-input" type="submit" />
                </form>

                <button onClick={() => {
                    setStep(step-1)
                }}>
                    prev
                </button>

                <input id="submit-input" type="submit" />
            </div>
        )
    }

    
}

export default Form;