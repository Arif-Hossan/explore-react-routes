import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='friends'>Friends</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <h1>Common Header</h1>
        </nav>
    );
};

export default Header;