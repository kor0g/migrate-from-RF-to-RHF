import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { store } from '../../store'
import { getFormValues } from './selectors'
import { setForm, updateFieldValue, destroyForm, updateForm } from './actions'

export const useStoreForm = ({
  validate,
  formName,
  defaultValues,
  destroyOnUnmount = true,
  ...config
}) => {
  const state = store.getState()
  const values = getFormValues(formName)(state)
  const formData = useForm({ ...config, defaultValues: values || defaultValues })
  const { formState, getValues, errors } = formData

  useEffect(() => {
    // did mount
    store.dispatch(
      setForm({ formName, formData: { isValid: formState.isValid, values: getValues(), errors } }),
    )

    return () => {
      // will unmount
      if (destroyOnUnmount) {
        store.dispatch(destroyForm(formName))
      }
    }
  }, [])

  useEffect(() => {
    // did update
    // store.dispatch(updateForm({ formName, formData: { isValid: formState.isValid, errors } }))
  }, [formName, formState.isValid, errors])

  const setFieldValueToState = (fieldName, value) =>
    store.dispatch(updateFieldValue({ formName, fieldName, value }))

  return {
    ...formData,
    setFieldValueToState,
    validate,
  }
}
