import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //Son para crear las rutas virtuales 
// Pages
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/productos",
    element: <ProductsPage/>
  },
  {
    path: "/productos/:id",
    element: <ProductDetailPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <Toaster/>

  <RouterProvider router={router} />
  </>
)
