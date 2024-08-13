import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-left" richColors closeButton  />
  </Provider>
)
