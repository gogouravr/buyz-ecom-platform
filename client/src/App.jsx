/** @format */

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Catalog from './pages/Catalog/Catalog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: 'catalog',
          element: <Catalog />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
