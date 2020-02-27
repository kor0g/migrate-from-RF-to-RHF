import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { hasInvalidForms } from './selectors'

export const Header: FC = () => {
  const isDisabled = useSelector(hasInvalidForms)
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
