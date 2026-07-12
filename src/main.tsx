import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router';
import Archive from './pages/Archive';
import Home from './pages/Home';

const router = createHashRouter([
  {
    path: '/',
    element: <App />, // App serves as the root layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'archive',
        element: <Archive />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
