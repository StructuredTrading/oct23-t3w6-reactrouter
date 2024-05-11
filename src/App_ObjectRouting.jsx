import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import PageNotFound from './pages/PageNotFound'


const someRouterBlahBlah = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound/>
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
])
function App() {

  return (
    <>
      <RouterProvider router={someRouterBlahBlah} />
    </>
  )
}

export default App
