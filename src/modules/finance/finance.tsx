import React from 'react'
import { reduxForm } from 'redux-form'
import { RField } from '../extended-redux-form'
import { validate } from './validate'

const Form = () => (
  <form>
    <RField name="date" label="Дата трудоустройства" />
    <RField name="years" label="Всего лет" />
    <RField name="months" label="Всего месяцев" />
  </form>
)

export const FinanceForm = reduxForm({
  form: 'finance',
  destroyOnUnmount: false,
  validate,
})(Form)
