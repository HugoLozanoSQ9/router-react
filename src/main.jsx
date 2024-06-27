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
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/productos",
        element: <ProductsPage />
      },
      {
        path: "/productos/:id",
        element: <ProductDetailPage />
      },
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
)
