import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './Pages/MainPage.jsx';
import KyivRus from './Pages/KyivRus.jsx';
import MapQuest1 from './Pages/MapQuest1.jsx'
import MapTest from './Pages/MapTest.jsx';
import InDev from './Pages/InDev.jsx';

const router = createBrowserRouter([{
    path: '/',
    element: <MainPage />
  },
  {
    path: '/kyivska-rus/test',
    element: <KyivRus />
  },
  {
    path: '/kyivska-rus/map',
    element: <MapTest /> // You can create separate components for each quest later
  },
  {
    path: '/kozatska-doba',
    element: <InDev />
  },
  {
    path: '/rozkvit-pysmennytstva',
    element: <InDev />
  },
  {
    path: '/druha-svitova-viyna',
    element: <InDev />
  },
  {
    path: '/nezaleznist-ukrainy',
    element: <InDev />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App> 
  </StrictMode>,
)