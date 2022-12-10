import React from 'react'
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {routes} from './Routers/Routes';
import './App.css';



const App = () => {
  return (

        <RouterProvider router={routes} ></RouterProvider>

  )
}


export default App;
