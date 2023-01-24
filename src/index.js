import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './Components/Form/Registration/Registration/Registration';
import Login from './Components/Form/LoginPage/LogIn/LoginPage';
import HomePage from './Components/HomePage/HomePage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import ProfilePage from './Components/ProfilePage/ProfilePage';






const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage/>,
  },
 

]);

root.render(
  <RecoilRoot>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
