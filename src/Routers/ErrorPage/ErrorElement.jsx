import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

  const error = useRouteError();
  console.log(error)

  return (
   <>
<div className="d-flex align-items-center justify-content-center vh-100 bg-pink-300">
    <div className="text-center">
        <h1 className=" display-1 fw-bold text-50"> {error.status} </h1>
        <p className="fs-3"> <span className="text-danger">Opps!</span> {error.statusText} </p>
        <p className="lead" style={{fontSize:"1.8rem" }}>
            { error.error.message }
          </p>
        <a href="/home" style={{background:"#460C68",color:"#F56EB3", fontSize:"2rem"}} className="btn cursor-pointer">Go Home</a>
    </div>
</div>
   </>
  )
}

export default ErrorElement
