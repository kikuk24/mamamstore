import React from 'react'
import { sideLeft } from './data/data';
import ReactDOM from 'react-dom/client'
document.title = sideLeft[0].title
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/product';
import DashboardPage from './pages/dashboardPage';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProfilePage from './pages/profilePage';
import User from './Conmponent/Element/dashboard/User';
import EditPage from './pages/editPade';
import AboutPages from './pages/AboutPages';

axios.defaults.withCredentials = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>
  },
  {
    path: "/dashboard/user",
    element: <User/>
  },
  {
    path: `/dashboard/user/edit/:uuid`,
    element: <EditPage/>
  },
  {
    path: "/about",
    element: <AboutPages/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
