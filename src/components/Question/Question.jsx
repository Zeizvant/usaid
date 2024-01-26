import { useState } from 'react'
import {ArrowIcon} from '../../assets/arrowIcon'
import './index.css'

export const Question = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='question'>
            <div className='question-text' onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <p>{question}</p>
                <div className={isOpen ? '' : 'open'}><ArrowIcon /></div>
            </div>
            {isOpen ? 
                <div className='answer-opened' dangerouslySetInnerHTML={{__html: answer}} />
                :
                <div className='answer-closed' />
            }
        </div>
    )
}