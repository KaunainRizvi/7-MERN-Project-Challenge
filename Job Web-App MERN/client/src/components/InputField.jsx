import React from 'react'

function InputField({label, type, name, id, ...props}) {
  return (
    <div className='form-group mt-2'>
        <label 
        htmlFor={id}>{label}</label>
        <input type={type}
        className='form-control'
        required
        autoComplete='off' />
    </div>
  )
}

export default InputField