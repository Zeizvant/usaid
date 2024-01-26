import { Arrow } from '../../assets/Arrow'
import './index.css'

export const CourseCard = ({src, text, registration}) => {
    return (
        <div className='course-card'>
            <div className='course-info'>
                <img src={src} alt={text} />
                <p className='course-name'>{text}</p>
                <p>{registration}</p>
            </div>
            <div className='course-details'>
                <Arrow />
                <p>კურსის დეტალები</p>
            </div>
        </div>
    )
}