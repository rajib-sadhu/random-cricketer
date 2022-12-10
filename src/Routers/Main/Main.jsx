import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/Navbar/NavBar';

import './Main.css';

const Main = () => {
  return (
    <>
        <div className='mainStyle'>
        <NavBar/>
          <Outlet/>
        <Footer/>
        </div>
    </>
  )
}

export default Main
