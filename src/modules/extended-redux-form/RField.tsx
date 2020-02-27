import * as React from 'react'
import { Field } from 'redux-form'
import { Input } from 'semantic-ui-react'
import { InputWrapper } from '../../components'

const CustomField = ({ input, label, type, meta: { touched, error } }: any) => (
  <InputWrapper label={label} errorMessage={error}>
    <Input {...input} placeholder={label} type={type} />
  </InputWrapper>
)

export const RField = ({ ...props }: any) => <Field {...props} component={CustomField} />
