import './index.css'
import TBC from '../../images/tbc.webp'
import fb from '../../images/fb.webp'
import youtube from '../../images/youtube.webp'

export const Footer = () => {
    return (
        <footer>
            <div>
                <div className='rules'>
                    <img src={TBC} alt='tbc logo' />
                    <div className='social-mobile'>
                        <div className='social-logos'>
                            <img src={fb} alt='facebook' />
                            <img src={youtube} alt='youtube' />
                        </div>
                        <div className='secondary-button'>მოგვწერეთ</div>
                    </div>
                    <p>© 2023 ყველა უფლება დაცულია</p>
                    <p id='terms'>წესები და პირობები</p>
                </div>
                <div className='social'>
                    <div className='social-logos'>
                        <img src={fb} alt='facebook' />
                        <img src={youtube} alt='youtube' />
                    </div>
                    <div className='secondary-button'>მოგვწერეთ</div>
                </div>
            </div>
        </footer>
    )
}