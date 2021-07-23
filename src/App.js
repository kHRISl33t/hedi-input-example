import './App.css';
import { useState } from 'react';
import Input from './Input'

function App() {
  const [formValues, setFormValues] = useState({ myFormField: '', myFormFieldAnother: '' })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ message: 'Submitted', formValues })
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Input
          label="myInputLabel"
          name="myFormField"
          formValues={formValues}
          setFormValues={setFormValues}
          someOtherArgs={() => { }}
          someAnotherArgs={() => { }}
        />
        <Input
          label="mySecondInputLabel"
          name="myFormFieldAnother"
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <p>myInputLabel value: {formValues.myFormField}</p>
      <br />
      <p>mySecondInputLabel value: {formValues.myFormFieldAnother}</p>
    </div>
  );
}

export default App;
