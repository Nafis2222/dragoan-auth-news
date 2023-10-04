import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login';
import Errorpage from '../Errorpage';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import News from './Components/News';
import PrivateRouter from './Components/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/data/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivateRouter><News></News></PrivateRouter>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
