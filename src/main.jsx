import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ImageDetails from './components/ImageDetails.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/photos/:id",
      element: <ImageDetails />
    }
]);
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
