import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './Pages/MainPage.jsx';
import KyivRus from './Pages/KyivRus.jsx';
import MapQuest1 from './Pages/MapQuest1.jsx';

const router = createBrowserRouter([{
    path: '/',
    element: <MainPage />
  },
  {
    path: '/kyivska-rus',
    element: <KyivRus />
  },
  {
    path: '/galytsko-volynske-kniazivstvo',
    element: <KyivRus /> // You can create separate components for each quest later
  },
  {
    path: '/kozatska-doba',
    element: <KyivRus />
  },
  {
    path: '/rozkvit-pysemnystva-xviii-st',
    element: <KyivRus />
  },
  {
    path: '/druha-svitova-viina',
    element: <KyivRus />
  },
  {
    path: '/nezalezhnist-ukrainy',
    element: <KyivRus />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App> 
  </StrictMode>,
)