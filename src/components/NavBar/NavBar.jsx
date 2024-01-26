import './index.css'
import { Logo } from '../../assets/Logo'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { useEffect, useState } from 'react'

export const NavBar = () => {

    const [isScrolled, setIsScrolled]  = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        scrollPosition > 0 ? setIsScrolled(true) : setIsScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={isScrolled? 'scroll' : 'static'}>
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
    )
    
}