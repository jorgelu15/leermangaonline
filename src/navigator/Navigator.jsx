import React, { lazy, Suspense, useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
import ProtectedRoute from '../routers/ProtectedRoute'



import routes from '../helpers/routes'

const Home = lazy(async () => {
  return Promise.all([
    import('../pages/Home'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Login = lazy(async () => {
  return Promise.all([
    import('../pages/Login'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Register = lazy(async () => {
  return Promise.all([
    import('../pages/Register'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Manga = lazy(async () => {
  return Promise.all([
    import("../pages/Manga"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Vermanga = lazy(async () => {
  return Promise.all([
    import('../pages/Vermanga'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Perfil = lazy(async () => {
  return Promise.all([
    import('../pages/Perfil'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Panel = lazy(async () => {
  return Promise.all([
    import('../pages/Panel'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const PanelAdministracion = lazy(async () => {
  return Promise.all([
    import('../pages/PanelAdministracion'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Subirmanga = lazy(async () => {
  return Promise.all([
    import('../pages/Subirmanga'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Subirobra = lazy(async () => {
  return Promise.all([
    import('../pages/Subirobra'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Terms = lazy(async () => {
  return Promise.all([
    import('../pages/Terms'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Scanlation = lazy(async () => {
  return Promise.all([
    import('../pages/Scanlation'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const GroupScans = lazy(async () => {
  return Promise.all([
    import('../pages/GroupScans'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
const Directory = lazy(async () => {
  return Promise.all([
    import('../pages/Directory'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});


const FallbackLoader = () => {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"

    }}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        contentLoader={(props) => (
          <div>
            <TailSpin {...props} />
            <p style={{ marginTop: "10px", fontSize: "16px", fontWeight: "bold", color: "#4fa94d" }}>Cargando...</p>
          </div>
        )}
      />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<FallbackLoader />}><Home /></Suspense>
  },
  {
    path: routes.directory,
    element: <Suspense fallback={<FallbackLoader />}><Directory /></Suspense>
  },
  {
    path: routes.login,
    element: <Suspense fallback={<FallbackLoader />}><Login /></Suspense>
  },
  {
    path: routes.register,
    element: <Suspense fallback={<FallbackLoader />}><Register /></Suspense>
  },
  {
    path: routes.manga + "/:id/:serie",
    element: <Suspense fallback={<FallbackLoader />}><Manga /></Suspense>
  },
  {
    path: routes.vermanga + "/:id_grupo/:serie_uid/:id_capitulo/:num_cap",
    element: <Suspense fallback={<FallbackLoader />}><Vermanga /></Suspense>
  },
  {
    path: routes.terms,
    element: <Suspense fallback={<FallbackLoader />}><Terms /></Suspense>
  },
  {
    path: routes.scanlation + `/:id_grupo`,
    element: <Suspense fallback={<FallbackLoader />}><Scanlation /></Suspense>
  },
  {
    path: routes.groups,
    element: <Suspense fallback={<FallbackLoader />}><GroupScans /></Suspense>
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.subirmanga,
        element: <Suspense fallback={<FallbackLoader />}><Subirmanga /></Suspense>
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.subirobra,
        element: <Suspense fallback={<FallbackLoader />}><Subirobra /></Suspense>
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.panel + "/:id/:grupo",
        element: <Suspense fallback={<FallbackLoader />}><Panel /></Suspense>
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.panelAdmin + "/:id/:usuario",
        element: <Suspense fallback={<FallbackLoader />}><PanelAdministracion /></Suspense>
      },
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.perfil,
        element: <Suspense fallback={<FallbackLoader />}><Perfil /></Suspense>
      },
    ]
  },
]);



const Navigator = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default Navigator;