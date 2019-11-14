import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from 'semantic-ui-react'

export const Field = ({ name, label, required, format, ...uiProps }) => {
  console.log('Field', { uiProps })
  const { register, errors, setFieldValueToState, validate = {} } = useFormContext()
  const handleChange = e => {
    const value = e.target.value
    if (format) {
      e.target.value = format(value)
    }
    setFieldValueToState(name, value)
  }

  return (
    <div>
      <div>
        {label}
        {required && '*'}
      </div>
      {/* <Input
        name={name}
        autoComplete="off"
        placeholder={label}
        ref={register({ required: false, ...validate[name] })}
        onChange={handleChange}
      /> */}
      <div className={`ui input ${uiProps} ${errors[name] && 'error'}`}>
        <input
          name={name}
          autoComplete="off"
          placeholder={label}
          ref={register({ required: false, ...validate[name] })}
          onChange={handleChange}
        />
      </div>
      {errors[name] && <span style={{ color: 'red' }}>{errors[name].message}</span>}
    </div>
  )
}
