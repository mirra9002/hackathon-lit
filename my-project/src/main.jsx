import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './Pages/MainPage.jsx';

const router = createBrowserRouter([{
    path: '/',
    element: <MainPage />
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App> 
  </StrictMode>,
)