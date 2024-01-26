import { CourseCard } from '../CourseCard/CourseCard'
import './index.css'
import iOS from '../../images/ios-development.webp'
import reactPhoto from '../../images/react.webp'
import introPython from '../../images/intro-to-python.webp'
import advancedPython from '../../images/advanced-cybersecurity.webp'
import cybersecurity from '../../images/advanced-cybersecurity.webp'
import tot from '../../images/tot.webp'
import blockchain from '../../images/blockchain.webp'
import devops from '../../images/devops.webp'
import informationSecurity from '../../images/information-security.webp'

export const Courses = () => {
    return (
        <section className='courses'>
            <div>
                <h3>სასწავლო კურსები</h3>
                <div className='courses-container'>
                    <CourseCard src={iOS} text='iOS Development' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={reactPhoto} text='React' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={introPython} text='Intro to Python' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={advancedPython} text='Advanced Python' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={cybersecurity} text='Advanced Cybersecurity Course' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={tot} text='ToT - Training of Trainers' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={blockchain} text='Blockchain' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={devops} text='DevOps' registration='რეგისტრაცია დასრულებულია'/>
                    <CourseCard src={informationSecurity} text='Information Security Governance' registration='რეგისტრაცია დასრულებულია'/>
                </div>
            </div>
        </section>
    )
}