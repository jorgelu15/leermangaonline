import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import routes from './helpers/routes'
import Register from './pages/Register'
import Home from './pages/Home'
import Manga from "./pages/Manga"
import Vermanga from './pages/Vermanga'
import Perfil from './pages/Perfil'
import Subirmanga from './pages/Subirmanga'
import Terms from './pages/Terms'
import Scanlation from './pages/Scanlation'
import GroupScans from './pages/GroupScans'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.perfil} element={<Perfil />} />
          <Route path={routes.manga} element={<Manga />} />
          <Route path={routes.vermanga} element={<Vermanga />} />
          <Route path={routes.subirmanga} element={<Subirmanga />}/>
          <Route path={routes.terms} element={<Terms/>} />
          <Route path={routes.scanlation} element={<Scanlation/>}></Route>
          <Route path={routes.groups} element={<GroupScans/>}></Route>
          {/*<Route path={routes.forgotPassword+"/:token"} />
          <Route path={routes.confirmAccount} />
          <Route path={routes.newPassword} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
