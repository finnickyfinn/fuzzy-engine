import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./Components/Header"
import Contact from './Pages/Contact'
import About from './Pages/About'
import Footer from './Components/Footer'
import Services from './Pages/Services';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "About",
    element:<> <Header /> <About /> <Footer /> </>
  },
  {
    path: "Services",
    element: <> <Header /> <Services /> <Footer /> </>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
