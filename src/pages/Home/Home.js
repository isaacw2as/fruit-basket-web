import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
import logo from '../../assets/logo.png';
import banana from '../../assets/banana.png';
import mango from '../../assets/mango.png';

const Home = () => {
  return (
    
    <div className='fb__home'> 
        <div className='fb__home-links'>
            <div className='fb__home-links_container'>
                <div className='fb__home-links_container-nav'>
                    <p className='fb__home-links_container-nav-about'>
                        <Link to="/about"> 
                        <a>about</a>
                        </Link>
                    </p>
                    <p className='fb__home-links_container-nav-explore'>
                        <Link to="/explore"> 
                        <a>explore</a>
                        </Link>
                    </p>
                </div>
                <div className='fb__home-links_container-signin'>
                    <button>
                        <Link to="/signin">
                        <a>sign in</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='fb__home-hello'>
            <h2>hello ~</h2>
        </div>
        <div className='fb__home-welcome'>
            <h1 className='fb__home-welcome1'>welcome to the </h1>
            <h1 className='fb__home-welcome2'>fruit basket!</h1>
            <img src={logo} alt='logo'/>
            <p className='fb__home-welcome-slogan'>find a bunch, pick a bunch, start a bunch</p>
            <button> </button>
        </div>
        <div className='fb__home-backimg'>
            <img src={banana} className='fb__home-banana'/>
            <img src={mango} className='fb__home-mango'/>
        </div>
    </div>
  )
}

export default Home
