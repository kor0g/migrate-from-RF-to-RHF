import React from 'react'
import { Field } from 'redux-form'

const CustomField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>{label}</div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  </div>
)

export const RField = ({ ...props }) => <Field {...props} component={CustomField} />
