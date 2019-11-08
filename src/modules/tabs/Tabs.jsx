import * as React from 'react'
import { equals } from 'ramda'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getPageTabs } from './selectors'
import { setActive } from './actions'

const Button = styled.button`
  background: ${props => (props.isInvalid ? 'red' : 'green')};
  outline: 3px solid ${props => (props.isActive ? 'black' : 'white')};
`

const Component = ({ pageTabs, setActive }) => (
  <div>
    {pageTabs.map(({ title, formName, formIsInvalid, isActive }) => (
      <Button
        isActive={isActive}
        isInvalid={formIsInvalid}
        key={formName}
        onClick={() => setActive(formName)}>
        {title}
      </Button>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  pageTabs: getPageTabs,
})

const areEqual = (prevProps, nextProps) => equals(prevProps.pageTabs, nextProps.pageTabs)

export const Tabs = connect(
  mapStateToProps,
  { setActive },
)(React.memo(Component, areEqual))
