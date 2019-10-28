export const validate = values => {
  let errors = {}

  if (!values.number) {
    errors.number = 'Обязательно для заполнения'
  } else if (values.number.length > 6) {
    errors.number = 'Максимальная длина 6 символов'
  }
  
  return errors
}
