import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import { BiRightArrow } from 'react-icons/bi';


const Home = () => {
  return (
   <>
    <div className='homeDiv bg-black'>
    <div className='homeCenter'>
        <div className='homeText'>
          <h1>Welcome to Random Cricket Players Game</h1>
        </div>
        <button>
          <Link className='link' to='/players' >Get Started </Link>
        </button>
    </div>
    </div>
   </>

  )
}

export default Home
