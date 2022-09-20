import React from 'react'

import styles from '../../../styles/components/Tours/Tours.module.scss'
import { GiBackwardTime } from 'react-icons/gi'
import { BsCardList, BsChatText, BsCalendar4Event } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { IoLogoUsd } from 'react-icons/io'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Button } from '../../Button/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll';

type tour = {
    backgroundImg?: string,
    tituloPrincipalImg?: string,
    tituloSecondarioImg?: string,
    tituloPrincipal?: string,
    textoPrincipal?: string[],
    tituloCards?: string,
    titleLeft?: string,
    textTitleLeft?: string,
    textleft?: string[],
    titleRight?: string,
    hour?: string,
    description?: string,
    time?: string,
    price?: string,
    shop?: string,
    bibliotecaImg?: string[]
}

export const TextCards = React.memo((tourBase: tour) => {

    var arrayRight = [tourBase?.time, tourBase?.description, tourBase?.hour, tourBase?.price, tourBase?.shop];

    const iconos = [
        <GiBackwardTime />,
        <BsCardList />,
        <BiTimeFive />,
        <IoLogoUsd />,
        <RiShoppingBasketLine />,
    ]

    return (
        <div className={styles.sectionInfo}>
            <h1>{tourBase?.tituloCards}</h1>
            {/* section left */}
            <div className={styles.sectionInfo__principal}>
                <div className={`${styles.sectionInfo__principal_left}`}>

                    <div className={`${styles.headerCard}`}>
                        <BsChatText />
                        {tourBase?.titleLeft}
                    </div>

                    <div className={`${styles.textCard} `}>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'>
                            <h1>{tourBase?.textTitleLeft}</h1>

                            {
                                tourBase?.textleft != undefined
                                &&
                                tourBase?.textleft.map((item, index) => (
                                    <p
                                        key={`${item.split(' ').length}.${item.length - index}${index}`}
                                    >{item}</p>
                                ))
                            }
                        </AnimationOnScroll>
                    </div>
                </div>

                {/* seccion de la zona derecha */}
                <div className={styles.sectionInfo__principal_right}>

                    <div className={`${styles.headerCard}`}>
                        <AiOutlineInfoCircle />
                        {tourBase?.titleRight}
                    </div>

                    {
                        iconos.map((item, Index) => {

                            return (
                                <AnimationOnScroll key={Index} animateIn='animate__fadeInRight'>
                                    <div
                                        className={`${styles.textCard} ${styles.division} `}>
                                        {item}
                                        <p>{arrayRight[Index]}</p>
                                    </div>
                                </AnimationOnScroll>
                            )
                        })
                    }
                    <AnimationOnScroll animateIn='animate__fadeInRight'>
                        <div className={`${styles.textCard} ${styles.division}`}>
                            <BsCalendar4Event />

                            <Button
                                className={`${styles.buttonCard}`}
                                redirection={`ContactUs/${tourBase?.tituloPrincipalImg}`}
                                text="Contact"
                                scrollTop={true}
                            />

                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            {/*Fin de las secciones*/}
        </div>
    )
})
