import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Statistic from './components/Statistic';
import Applied from './components/Applied';
import Blogs from './components/Blogs';
import FeatureDetails from './components/FeatureDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/feature.json')
      },
      {
        path: '/feature/:id',
        element: <FeatureDetails></FeatureDetails>,
        loader: ({ params }) => fetch('/feature.json')
      },
      {
        path: '/statistics',
        element: <Statistic></Statistic>
      },
      {
        path: '/job',
        element: <Applied></Applied>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <App />

)