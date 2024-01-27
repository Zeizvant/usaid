import { useContext } from 'react'
import { Question } from '../Question/Question'
import './index.css'
import { Context } from '../../state/Context'

export const Faq = () => {

    const questions = useContext(Context)

    return (
        <section className='faq'>
            <div className='questions-container'>
                <div className='all-questions'>
                    <p>ხშირად დასმული კითხვები</p>
                    <div id='all-questions-button' class='main-button'>ყველა კითხვა</div>
                </div>
                <div className='questions'>
                    {questions.map((question) => {
                        return <Question key={question.text} question={question.text} answer={question.answer} />
                    })}
                </div>
                <div id='all-questions-button-mobile'>
                    <div class='main-button'>ყველა კითხვა</div>
                </div>
            </div>
        </section>
    )
}