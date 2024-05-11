import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { App } from './App.jsx';
import { router } from './router/index.jsx';

import './styles/index.css';

const casinoClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={casinoClient}>
      {/* <ReactQueryDevtools> */}
      {/* <App /> */}
      <RouterProvider router={router} />
      {/* </ReactQueryDevtools> */}
    </QueryClientProvider>
  </React.StrictMode>
);
