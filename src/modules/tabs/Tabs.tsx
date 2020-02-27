import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { equals } from 'ramda'
import { Button } from 'semantic-ui-react'
import { getPageTabs } from './selectors'
import { setActive } from './actions'

export const Tabs = () => {
  const dispatch = useDispatch()
  const pageTabs = useSelector(getPageTabs, equals)

  return (
    <Button.Group>
      {pageTabs.map(({ title, formName, isInvalid, isActive }) => (
        <Button
          key={formName}
          active={isActive}
          positive
          negative={isInvalid}
          onClick={() => dispatch(setActive(formName))}>
          {title}
        </Button>
      ))}
    </Button.Group>
  )
}
