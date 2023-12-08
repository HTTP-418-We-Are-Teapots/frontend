import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MemoryGame from './components/matcher/MemoryGame.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/landing/Header.tsx';
import Home from './pages/Home.tsx';

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
    path: "/game1",
    element: <MemoryGame/>,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
