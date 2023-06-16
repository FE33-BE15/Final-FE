import './Navbar.css'
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { addToken, logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'

function Navbar() {
    const dispatch = useDispatch()

    const token = localStorage.getItem('token')   
    if (token != null){
        return(
            <>
            <nav className='navbar'>
                <img src={Logo} alt="Logo" className='LogoApp' />
               <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Tracking'>Tracking</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Artikel'>Artikel</NavLink>
                    </li>
                    <span onClick={() =>{localStorage.clear(),window.location.reload(false)}}>Logout</span>
                </ul>
            </nav>
            </>
        )
    } else {
        return(
            <>
            <nav className='navbar'>
                <img src={Logo} alt="Logo" className='LogoApp' />
               <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Tracking'>Tracking</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Artikel'>Artikel</NavLink>
                    </li>
                    <Link to='/login'><span>Login</span></Link>
                </ul>
            </nav>
            </>
        )
    }
    
}
export default Navbar