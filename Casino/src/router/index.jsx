import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import {
  Casino,
  Fabricante,
  Inicio,
  Login,
  Modelo,
  Operador,
  Slot,
} from '../routes';

export const router = createBrowserRouter([
  {
    path: '/inicio',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/casino',
        element: <Casino />,
      },
      {
        path: '/slot',
        element: <Slot />,
      },
      {
        path: '/modelo',
        element: <Modelo />,
      },
      {
        path: '/fabricante',
        element: <Fabricante />,
      },
      {
        path: '/operador',
        element: <Operador />,
        children: [
          { path: 'casino/:id', element: <Casino /> },
          { path: 'slot/:id', element: <Slot /> },
          { path: 'modelo/:id', element: <Modelo /> },
          { path: 'fabricante/:id', element: <Fabricante /> },
          { path: '*', element: <Navigate to="/inicio" /> },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
