export const validate = (values: any) => {
  let errors: any = {}
  if (!values.date) {
    errors.date = 'Обязательно для заполнения'
  }
  if (!values.years) {
    errors.years = 'Обязательно для заполнения'
  }
  if (!values.months) {
    errors.months = 'Обязательно для заполнения'
  }
  return errors
}
