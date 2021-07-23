import './App.css';
import { useState } from 'react';
import Input from './Input'

function App() {
  const [formValues, setFormValues] = useState({ myFormName: '', mySecondFormName: '' })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ message: 'Submitted', formValues })
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Input label="myInputLabel" name="myFormName" formValues={formValues} setFormValues={setFormValues} />
        <Input label="mySecondInputLabel" name="mySecondFormName" formValues={formValues} setFormValues={setFormValues} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
