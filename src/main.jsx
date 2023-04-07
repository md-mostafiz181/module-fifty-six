import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import OrderReview from './OrderReview/OrderReview';
import About from './About/About';
import Contact from './Contact/Contact';

const router =createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
      {
        path :"/Home",
        element: <Home></Home>,
        loader : ()=> fetch ('tshirts.json')
      },
      {
        path: "/order review",
        element :<OrderReview></OrderReview>
      },
      {
        path: "/about",
        element : <About></About>
      },
      {
        path: "/contact",
        element :<Contact></Contact>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
