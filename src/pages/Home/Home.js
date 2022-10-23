import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
  return (
    
    <div className='fb__home'> 
        <div className='fb__home-links'>
            <div className='fb__home-links_container'>
                <p>
                    <Link to="/about"> 
                    <a>About</a>
                    </Link>
                </p>
                <p>
                    <Link to="/"> 
                    <a>Explore</a>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home
