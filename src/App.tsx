import React from 'react'
import { ROUTES } from './constants/routes'
import { ProductPage } from './pages/ProductPage'
import { ProductsPage } from './pages/ProductsPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ ROUTES.HOME } component={ ProductsPage }/>
        <Route path={ ROUTES.PRODUCT } component={ ProductPage }/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
