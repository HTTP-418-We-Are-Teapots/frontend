import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/landing/Header.tsx';
import Home from './pages/Home.tsx';
import Prevention from './pages/Prevention.tsx';
import Games from './pages/Games.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/prevention",
    element: <Prevention />,
  },
  {
    path: "/statistics",
    element: <div>Statistics</div>,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
