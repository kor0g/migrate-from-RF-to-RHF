export const validate = {
  number: {
    required: 'Обязательно для заполнения',
    maxLength: {
      value: 10,
      message: 'Максимальная длина 10 символов',
    },
    minLength: {
      value: 10,
      message: 'Минимальная длина 10 символов',
    },
    // validate: { other: v => v === '123' },
  },
  date: {
    required: 'Обязательно для заполнения',
  },
  who: {
    required: 'Обязательно для заполнения',
  },
}
