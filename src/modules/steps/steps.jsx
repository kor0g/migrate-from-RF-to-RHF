import * as React from 'react'
import { equals } from 'ramda'
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getPageSteps } from './selectors'
import { setActive } from './actions'

const Button = styled.button`
  background: ${props => (props.isInvalid ? 'red' : 'green')};
  outline: 3px solid ${props => (props.isActive ? 'black' : 'white')};
`

const Component = ({ pageSteps, setActive }) => (
  <div>
    {pageSteps.map(({ title, formName, formIsInvalid, isActive }) => (
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
  pageSteps: getPageSteps,
})

const areEqual = (prevProps, nextProps) => equals(prevProps.pageSteps, nextProps.pageSteps)

export const Steps = connect(
  mapStateToProps,
  { setActive },
)(React.memo(Component, areEqual))
