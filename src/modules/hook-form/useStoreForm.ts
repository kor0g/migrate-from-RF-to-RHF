import { useEffect } from 'react'
import { useForm, UseFormOptions } from 'react-hook-form'
import { store } from '../../store'
import { getFormValues } from './selectors'
import { setForm, updateFieldValue, destroyForm, updateForm } from './actions'

interface IUseStoreFormArgs extends UseFormOptions {
  validate?: {}
  formName: string
  defaultValues?: {}
  destroyOnUnmount?: boolean
}

export const useStoreForm = ({
  validate,
  formName,
  defaultValues,
  destroyOnUnmount = true,
  ...nativaHookFormConfig
}: IUseStoreFormArgs) => {
  const state = store.getState()
  const values = getFormValues(formName)(state)
  const formData = useForm({ ...nativaHookFormConfig, defaultValues: values || defaultValues })
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
    store.dispatch(updateForm({ formName, formData: { isValid: formState.isValid, errors } }))
  }, [formName, formState.isValid, errors])

  const setFieldValueToState = (fieldName: string, value: any) => {
    store.dispatch(updateFieldValue({ formName, fieldName, value }))
  }

  return {
    ...formData,
    setFieldValueToState,
    validate,
  }
}
