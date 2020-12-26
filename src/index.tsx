import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App'
import store from './store'
import { THEME } from './constants/theme'

const app = (
  <Provider store={ store }>
    <ThemeProvider theme={ THEME }>
      <App/>
    </ThemeProvider>
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>,
  document.getElementById('root')
)

