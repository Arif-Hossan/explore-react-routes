import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <NavLink className={({isActive})=>isActive?'active':undefined} to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink className={({isActive})=>isActive?'active':undefined} to='friends'>Friends</NavLink>
                <NavLink to='posts'>Posts</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <h1>Common Header</h1>
        </nav>
    );
};

export default Header;