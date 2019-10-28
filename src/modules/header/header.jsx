import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getThereAreInvalidForms } from '../steps'

const Component = ({ thereAreInvalidForms }) => {
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

const mapStateToProps = createStructuredSelector({
  thereAreInvalidForms: getThereAreInvalidForms,
})

export const Header = connect(mapStateToProps)(Component)
