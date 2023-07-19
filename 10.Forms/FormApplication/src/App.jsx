import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import { FormContext } from './providers/FormContext';

function App() {
  const [formInput, setFormInput] = useState({email: '', password: ''});
  return (
    <>
      Form application
      <FormContext.Provider value={{formInput, setFormInput}}>
        <Form />
      </FormContext.Provider>
    </>
  )
}

export default App
