import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpEmployee from './SignUpEmployee.jsx';
import Users from './Users.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  { path : "/", element: <Home />},
  { path : "/sign-up", element: <SignUpEmployee />},
  { path : "/users", element: <Users/>}
])

//npm run dev
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
