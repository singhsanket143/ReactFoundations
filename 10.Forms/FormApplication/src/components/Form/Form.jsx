import { useEffect, useRef, useState } from 'react';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';
import './Form.css';
function Form() {

    const exampleRef = useRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(exampleRef);
    })

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleValidatePassword = () => {
        const password = formValues.password;

        if(!validatePassword(password)) {
            console.log("password doesnt contain required parameters")
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;

        if(!validateEmail(email)) {
            console.log("email doesnt contain required parameters")
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        console.log(formValues)
    }

    return (
        <div>
            New form <br/>

            Count: {count}<br/>
            Exampleref: {exampleRef.current}<br/>
            <button onClick={() => setCount(count+1)}>update count</button>
            <button onClick={() => exampleRef.current++ }>update ref</button>


            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input 
                        id="email-input"
                        type="text" 
                        value={formValues.email} 
                        onChange={(event) => setFormValues({...formValues, email: event.target.value})}
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <input 
                        id="password-input"
                        type="password" 
                        value={formValues.password}  
                        onChange={(event) => setFormValues({...formValues, password: event.target.value})}
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>
        </div>
    )
}

export default Form;