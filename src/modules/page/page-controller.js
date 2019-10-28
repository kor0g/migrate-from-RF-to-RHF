import React from 'react'
import { connect } from 'react-redux'
import { pageSteps } from '../steps'
import { ErrorPage } from '../../components'

const Component = props => {
  const step = pageSteps.find(el => el.formName === props.page)
  const Component = step ? step.component : ErrorPage
  return <Component />
}

export const Page = connect(state => ({ page: state.steps.active }))(Component)
