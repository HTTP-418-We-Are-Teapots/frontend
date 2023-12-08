import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/landing/Header.tsx';
import Home from './pages/Home.tsx';
import Page404 from './components/404/Page404.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/statistics",
    element: <div>Statistics</div>,
  },
  {
    path: "/games",
    element: <div>Games</div>,
  },
  {
    path: "*",
    element: <Page404 />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
