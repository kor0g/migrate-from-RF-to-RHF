import { createSelector } from 'reselect'
import { getFormNames } from 'redux-form'
import { isEmpty } from 'ramda'
import { pageTabs } from './constants'
import { ITabsState } from './types'
import { getInvalidRFormNames } from "../extended-redux-form";
// import { IState } from '../../store'

type IState = any

const getTabsState = (state: IState): ITabsState => state.tabs

const getInvalidForms = createSelector(
  getInvalidRFormNames,
  (rFormNames) => {
  console.log(rFormNames)

  return ['']
})

export const getThereAreInvalidForms = createSelector(
  getInvalidForms,
  invalidForms => !isEmpty(invalidForms),
)

export const getPageTabs = createSelector(
  getInvalidForms,
  getTabsState,
  (invalidForms, tabsState) => {
    // console.log('getPageTabs')
    return pageTabs.map(({ formName, title }) => {
      const isInvalid = invalidForms.includes(formName)
      const isActive = tabsState.active === formName
      return { title, formName, isInvalid, isActive }
    })
  },
)
