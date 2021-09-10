import { useField } from "formik";

function Input({label,...props}) {

  const [field,meta] = useField(props)

  return (
    <>
    <label htmlFor={label}>
      {label} 
    <input id={label} {...field} {...props}/>
    </label>
    {(meta.touched && meta.error) && <div className='err' >{meta.error}</div>}
    </>
  );
}

export default Input;
