import React, { useEffect } from 'react'
import { path } from 'ramda'
import { useFormContext, Controller } from 'react-hook-form'
import { Input } from 'semantic-ui-react'

export const Field = ({ name, label, required, format, ...uiProps }) => {
  const { errors, setFieldValueToState, control, validate = {} } = useFormContext()
  const fieldValidate = validate[name] || {}
  const fieldError = errors[name]

  const handleChange = data => {
    let value = data[1].value
    // const event = data[0]

    if (format) {
      value = format(value)
    }

    setFieldValueToState(name, value)

    return value
  }

  return (
    <div>
      <div>
        {label}
        {(required || fieldValidate.required) && '*'}
      </div>
      <Controller
        as={<Input type="text" {...uiProps} />}
        control={control}
        rules={{ required: false, ...fieldValidate }}
        name={name}
        autoComplete="off"
        placeholder={label}
        onChange={handleChange}
        defaultValue=""
      />
      {fieldError && <span style={{ color: 'red' }}>{fieldError.message}</span>}
    </div>
  )
}
