import React from 'react'
import { Header } from './modules/header'
import { Tabs } from './modules/tabs'
import { Page } from './modules/page'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <hr />
      <Tabs />
      <hr />
      <Page />
    </>
  )
}
