import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx';

import Geoguesser from './games/geoguesser/Geoguesser.tsx';

import PreventGeoguessr from './prevention/games/PreventGeoguessr.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/statistics",
    element: <div>Statistics</div>,
  },
  {
    path: "/games",
    element: <div></div>,
  },
  {
    path: "/games/geoguessr",
    element: <Geoguesser />,
  },
  {
    path: "/prevention/geoguessr",
    element: <PreventGeoguessr />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
