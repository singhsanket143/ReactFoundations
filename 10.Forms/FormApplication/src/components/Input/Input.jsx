import { useContext, useState } from "react";
import { FormContext } from '../../providers/FormContext';
function Input({type, id, label}) {

    const { formInput, setFormInput} = useContext(FormContext);
    const [text, setText] = useState("");
    return (
        <>
            <input 
                type={type}
                id={id}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setFormInput({...formInput, [label]: e.target.value})
                }}
            />
        </>
    )
}

export default Input;