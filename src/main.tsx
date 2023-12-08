import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page404 from './components/404/Page404.tsx';
import './index.css';
import Home from './pages/Home.tsx';
import RightPriceComponent from './components/RightPriceGame.tsx';

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
  },
  {
    path: "/games/right-price-solution",
    element: <RightPriceComponent isSolution={true} />,
  },
  {
    path: "/games/right-price-problem",
    element: <RightPriceComponent isSolution={false} />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
