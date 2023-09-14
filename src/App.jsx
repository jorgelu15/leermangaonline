import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import routes from './helpers/routes'
import Register from './pages/Register'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          {/*<Route path={routes.forgotPassword+"/:token"} />
          <Route path={routes.confirmAccount} />
          <Route path={routes.newPassword} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
