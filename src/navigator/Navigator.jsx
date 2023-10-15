import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../routers/ProtectedRoute'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Manga from "../pages/Manga"
import Vermanga from '../pages/Vermanga'
import Perfil from '../pages/Perfil'
import Subirmanga from '../pages/Subirmanga'
import Terms from '../pages/Terms'

import routes from '../helpers/routes'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: routes.login,
      element: <Login />
    },
    {
      path: routes.register,
      element: <Register />
    },
    {
      path: routes.manga,
      element: <Manga />
    },
    {
      path: routes.vermanga,
      element: <Vermanga />
    },
    {
      path: routes.terms,
      element: <Terms />
    },
    {
      path: '/',
      element: <ProtectedRoute/>,
      children: [
        {
          path: routes.subirmanga,
          element: <Subirmanga />
        },
        {
          path: routes.perfil,
          element: <Perfil />
        },
      ]
    },
]);

const Navigator = () => {

    return (
      <RouterProvider router={ router } />
    )
}

export default Navigator;