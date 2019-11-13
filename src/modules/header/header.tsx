import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { getThereAreInvalidForms } from '../tabs'

export const Header = () => {
  const isDisabled = useSelector(getThereAreInvalidForms)
  return (
    <>
      <br />
      <br />
      <Button primary disabled={isDisabled}>
        Отправить
      </Button>
      <br />
      <br />
    </>
  )
}
