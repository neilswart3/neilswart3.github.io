import React from 'react'
import ReactDOM from 'react-dom'
import { ArwesThemeProvider, StylesBaseline } from '@arwes/core'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif'

ReactDOM.render(
  <React.StrictMode>
    <ArwesThemeProvider>
      <StylesBaseline
        styles={{
          body: { fontFamily: ROOT_FONT_FAMILY, height: '100vh' },
          button: { margin: '0 20px 20px 0' },
        }}
      />
      <App />
    </ArwesThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
