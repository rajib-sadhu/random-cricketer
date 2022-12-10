import React from 'react';
import './Footer.css';
import { FaSlackHash } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <div className='footerDiv'>
        <FaSlackHash className='hash'/>
        <p>This Website Create By ©  Rajib Sadhu 2022 </p>
    </div>
   </>
  )
}

export default Footer
