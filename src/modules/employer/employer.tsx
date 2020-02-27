import React from 'react'
import { FormContext } from 'react-hook-form'
import { useStoreForm, Field } from '../hook-form'
import { validate } from './validate'

export const EmployerForm = () => {
  const methods = useStoreForm({
    formName: 'employer',
    mode: 'onChange',
    destroyOnUnmount: false,
    validate,
  })

  return (
    <FormContext {...methods}>
      <form>
        <Field name="name" label="Наименование" />
        <Field name="inn" label="ИНН" />
        <Field name="card" label="Карта" />
      </form>
    </FormContext>
  )
}
