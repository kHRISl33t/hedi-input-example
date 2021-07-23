export default function Input(props) {
  const onChange = (event) => {
    console.log({
      message: 'Input component',
      props,
      inputName: props.name,
      inputLabel: props.label,
      onChangeValue: event.target.value
    })
    props.setFormValues({ ...props.formValues, [props.name]: event.target.value })
  }

  return (
    <label>
      {props.label}:
      <input
        type="text"
        name={props.name}
        onChange={onChange}
        value={props.formValues[props.name]}
      />
    </label>
  )
}