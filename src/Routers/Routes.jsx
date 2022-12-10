import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

//Mains
import Main from './Main/Main';
import ErrorElement from './ErrorPage/ErrorElement';

//Pages
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Players from '../Pages/Players/Players';



 export const routes= createBrowserRouter([
        {
            path:"/",
            element:<Main/>,
            errorElement:<ErrorElement/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/players",
                    element:<Players/>
                },
                
            ]
        }
    ]);
