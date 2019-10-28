import React from 'react'
import { reduxForm } from 'redux-form'
import { RField } from '../../components'
import { validate } from './validate'

const Form = () => (
  <form>
    <RField name="number" label="Номер телефона" />
    <RField name="email" label="E-mail" />
    <RField name="name" label="Имя" format={(value = '') => value.toUpperCase()} />
  </form>
)

export const ContactsForm = reduxForm({
  form: 'contacts',
  destroyOnUnmount: false,
  validate,
})(Form)
