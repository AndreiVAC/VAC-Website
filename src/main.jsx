import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpAdministrator from './SignUpAdministrator.jsx';
import Users from './Users.jsx';
import Home from './Home.jsx';
import LogIn from './LogIn.jsx';
import JoinURL from './JoinURL.jsx';
import SignedUp from './SignedUp.jsx';
import Skills from './Skills.jsx';

const router = createBrowserRouter([
  { path : "/", element: <Home />},
  { path : "/log-in", element: <LogIn />},
  { path : "/sign-up", element: <SignUpAdministrator />},
  { path : "/users", element: <Users/>},
  { path : "/join-organization/", element: <JoinURL/>},
  { path : "/sign-up-successful/", element: <SignedUp/>},
  { path : "/skills/", element: <Skills/>},
])

//npm run dev
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
