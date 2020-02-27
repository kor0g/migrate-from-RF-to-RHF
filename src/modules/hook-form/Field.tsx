import React, { useEffect } from 'react'
import { path } from 'ramda'
import { useFormContext, Controller, FormContextValues, EventFunction } from 'react-hook-form'
import { Input } from 'semantic-ui-react'
import { InputWrapper } from '../../components'

interface IFieldProps {}

// interface IExtendedFormContextFalues extends FormContextValues {
//   setFieldValueToState: (fieldName: string, value: any) => void
//   validate: {}
// }

interface IFieldProps {
  name: string
  label: string
  required?: false
  format?: (v: string) => string
}

export const Field = ({ name, label, required, format, ...uiProps }: IFieldProps) => {
  const { errors, setFieldValueToState, control, validate = {} }: any = useFormContext()
  const fieldValidate = validate[name] || {}
  const fieldError = errors[name]

  const handleChange: EventFunction = ([event, data]) => {
    let value = data.value

    if (format) {
      value = format(value)
    }

    setFieldValueToState(name, value)

    return value
  }

  return (
    <InputWrapper
      label={label}
      required={required || fieldValidate.required}
      errorMessage={fieldError && fieldError.message}>
      <Controller
        as={<Input {...uiProps} />}
        control={control}
        rules={{ required: false, ...fieldValidate }}
        name={name}
        autoComplete="off"
        placeholder={label}
        onChange={handleChange}
        defaultValue=""
      />
    </InputWrapper>
  )
}
