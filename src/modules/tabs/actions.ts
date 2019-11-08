export const setActive = (payload: string) =>
  <const>{
    type: 'SET_ACTIVE',
    payload,
  }

export type TAction = ReturnType<typeof setActive>
