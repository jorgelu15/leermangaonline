import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './css/styles.jsx'
import App from './App'

import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
      <App />
    </SnackbarProvider>
  // </React.StrictMode>,
)
