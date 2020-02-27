import { createSelector } from 'reselect'
import { isEmpty } from 'ramda'
import { getInvalidRFormNames } from '../extended-redux-form'
import { getInvalidHFormNames } from '../hook-form'

export const hasInvalidForms = createSelector(
  getInvalidRFormNames,
  getInvalidHFormNames,
  (rFormNames: Array<string>, hFormNames: Array<string>) => {
    console.log({ rFormNames, hFormNames })
    return !isEmpty([...rFormNames, ...hFormNames])
  },
)
