import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import LoginPage from './components/LoginPage.tsx';
import RegisterPage from './components/RegisterPage.tsx';
import Header from './components/Header.tsx';
import Profile from './components/Profile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <LoginPage />,
      </>
    )
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <RegisterPage />,
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Header />
        <Profile />,
      </>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
