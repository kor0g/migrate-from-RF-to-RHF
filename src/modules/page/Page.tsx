import React from 'react'
import { connect } from 'react-redux'
import { pageTabs } from '../tabs'

interface IComponentProps {
  page: string
}

const InitialPage = () => <h1>...</h1>

const Component: React.FC<IComponentProps> = ({ page }) => {
  const step = pageTabs.find(el => el.formName === page)
  const Component = step ? step.component : InitialPage
  return <Component />
}
// @ts-ignore
export const Page = connect(state => ({ page: state.tabs.active }))(Component)
