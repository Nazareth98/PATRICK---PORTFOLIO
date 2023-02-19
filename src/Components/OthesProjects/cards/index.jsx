import React from 'react'
import Icons from '../../Components/Icons/index'
import Items from './cardsItems'
import '../../../Styles/Components/card.scss'

const Card = ({ seeMore }) => {
    const cardsOn = [];
    const amountCards = seeMore ? Items.length - 1 : 5

    for (let i = 0; i <= amountCards; i++) {
        cardsOn.push(Items[i])
    }

    return (

        cardsOn.map(item => {
            return <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
                className='card' key={item.id}>
                <div className='card-header'>
                    <div>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div>
                        <Icons github={item.github} url={false} />
                    </div>
                </div>
                <div className='card-info'>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        })
    )
}

export default Card