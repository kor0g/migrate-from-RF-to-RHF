import React from 'react'
import { FormContext } from 'react-hook-form'
import { useStoreForm, Field } from '../hook-form'
import { validate } from './validate'

export const PassportForm = () => {
  const methods = useStoreForm({
    formName: 'passport',
    mode: 'onChange',
    // destroyOnUnmount: false,
    validate,
  })

  return (
    <FormContext {...methods}>
      <form>
        <Field name="number" label="Серия, номер" />
        <Field name="date" label="Дата выдачи" />
        <Field name="who" label="Кем выдан" format={v => (v || '').toUpperCase()} />
      </form>
    </FormContext>
  )
}
