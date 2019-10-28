import React from 'react'
import { useFormContext } from 'react-hook-form'

export const FieldWithMask = ({ name, label, format, normalize }) => {
  const { register, errors, setFieldValue, validate = {} } = useFormContext()
  return (
    <div>
      <div>{label}</div>
      <input
        name={name}
        placeholder={label}
        ref={register(validate[name] || {})}
        onChange={e => setFieldValue(name, e.target.value)}
      />
      {errors && errors[name] && <span style={{ color: 'red' }}>{errors[name].message}</span>}
    </div>
  )
}
