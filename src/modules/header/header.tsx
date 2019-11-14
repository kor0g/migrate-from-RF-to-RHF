import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { getThereAreInvalidForms } from '../tabs'

export const Header: FC = () => {
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
