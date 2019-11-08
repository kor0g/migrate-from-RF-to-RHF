import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getThereAreInvalidForms } from '../tabs'
import { IState } from '../../store'

interface IHeaderProps {
  thereAreInvalidForms: boolean
}

const Component = ({ thereAreInvalidForms }: IHeaderProps) => {
  return (
    <>
      <br />
      <br />
      <button disabled={thereAreInvalidForms}>Отправить в обработку</button>
      <br />
      <br />
    </>
  )
}

const mapStateToProps = createStructuredSelector<IState, IHeaderProps>({
  thereAreInvalidForms: getThereAreInvalidForms,
})

export const Header = connect(mapStateToProps)(Component)
