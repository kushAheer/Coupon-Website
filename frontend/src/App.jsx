import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Pages/Layout'
import HomePage from './Pages/HomePage'
function App() {
  
  const routes = createBrowserRouter([
    {
      path :'/',
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage/>},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}>
        
      </RouterProvider>
    </>
  )
}

export default App
