import './Navbar.css'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
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
                <span>Login</span>
            </ul>
        </nav>
        </>
    )
}
export default Navbar