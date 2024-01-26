import { useEffect, useState } from 'react'
import './index.css'

export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        isOpen && (document.body.style.overflow = 'hidden');
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [isOpen]);

    return (
        <div>
            <div className={isOpen ? 'wrapper-menu open' : 'wrapper-menu'} onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
            </div>
            {isOpen ? 
                <div className='menu-container'>
                    <div className='menu'>
                        <ul >
                            <li>მთავარი</li>
                            <li>TBC IT</li>
                            <li className='active'>TBC x USAID</li>
                            <li>რისკები</li>
                        </ul>
                    </div>
                </div>
                :
                <div className='menu-container hidden'>
                    <div className='menu hidden'></div>
                </div> }
            
        </div>
    )
}