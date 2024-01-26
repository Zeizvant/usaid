import './index.css'
import { Logo } from '../../assets/Logo'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

export const NavBar = () => {
    return <nav>
        <div className='navbar-container'>
            <a href='/'><Logo className='main-logo' /></a>
            <ul className='nav-links'>
                <li>მთავარი</li>
                <li>TBC IT</li>
                <li className='active'>TBC x USAID</li>
                <li>რისკები</li>
            </ul>
            <div className='burger-menu'>
                <BurgerMenu />
            </div>
        </div>
    </nav>
}