export const validate = values => {
  let errors = {}
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
