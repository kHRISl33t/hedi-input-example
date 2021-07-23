export default function Input({ formValues, setFormValues, name, label, ...rest }) {
  const onChange = (event) => {
    console.log({
      message: 'Input component',
      inputName: name,
      inputLabel: label,
      onChangeValue: event.target.value
    })
    setFormValues({ ...formValues, [name]: event.target.value })
  }

  return (
    <label>
      {label}:
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={formValues[name]}
        {...rest}
      />
    </label>
  )
}