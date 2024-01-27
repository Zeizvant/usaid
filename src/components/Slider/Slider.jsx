import { Next } from '../../assets/Next'
import { Prev } from '../../assets/Prev'
import './index.css'
import usaid from '../../images/usaid.webp'
import space from '../../images/space.webp'
import tnet from '../../images/tnet.webp'
import tegeta from '../../images/tegeta.webp'
import spectre from '../../images/spectre.webp'
import tbcAuto from '../../images/tbc-auto.webp'
import ufc from '../../images/ufc.webp'
import { useEffect, useState } from 'react'
import { divideListIntoGroups } from '../../functions/divideListIntoGroups'

export const Slider = () => {

    const dividedList = divideListIntoGroups([usaid, space, tnet, tegeta, spectre, tbcAuto, ufc], 3)
    const [itemsToShow, setItemsToShow] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {    
        setItemsToShow(dividedList[index])
    }, [index])

    useEffect(() => {
        const timerId = setTimeout(() => {
            index === dividedList.length - 1 ? setIndex(0) : setIndex((index + 1) % dividedList.length)
        }, 2000);

        return  () => {
            clearTimeout(timerId);
        }
    }, [index])

    return (
        <section className='slider-container'>
            <h3>პროექტის პარტნიორები</h3>
            <div className='slider'>
                <div className='slider-controls' onClick={() => {
                    index === 0 ? setIndex(dividedList.length - 1) : setIndex((index - 1) % dividedList.length)
                }}>
                    <Prev />
                </div>
                <div className='slider-content'>
                    <div className={itemsToShow.length === 1 ? 'slider-images justify-center' : 'slider-images justify-between'}>
                        {itemsToShow.map((item) => {
                            return <img key={item} src={item} alt='slider' />
                        })}
                    </div>
                    <div className='slider-dots'>
                        {dividedList.map((_,i) => {
                            return (
                                <div key={i} className={i == index ? 'chosen-dot':'dot'} onClick={() => {
                                    setIndex(i)
                                }}
                                ></div>
                            )    
                        })}
                    </div>
                </div>
                <div className='slider-controls' onClick={() => {
                    index === dividedList.length - 1 ? setIndex(0) : setIndex((index + 1) % dividedList.length)
                }}>
                    <Next />
                </div>
            </div>
        </section>
    )
}