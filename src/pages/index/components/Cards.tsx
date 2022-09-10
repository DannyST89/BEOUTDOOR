import { useState } from 'react'
import * as images from '../../../assets/images/Images';
import { Button } from '../../../components/Button/Button';

export const Cards = () => {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <div className='containerCard'>

            <div className="blog-slider wow animate__animated animate__fadeInLeft ">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide animate__animated animate__fadeIn">
                        <div className="blog-slider__img">
                            <div className="cardIndex">
                                <img src={images.rafting1} className="card-img rounded" alt="..." />
                                <div className="card-img-overlay blog-slider__card">
                                    <h1 className="card-title tituloImageCard ">Adventure is waiting</h1>
                                    <p className="card-text"></p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-slider__content">
                            <div className='blog-slider__content-content'>
                                <div className="blog-slider__title animate-charcter"><h1>Adventure</h1></div>
                                <span className="blog-slider__code">{`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`}</span>

                                <div className="blog-slider__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum recusandae doloremque, magnam officiis ipsum
                                    sint voluptatum architecto quos quibusdam velit! Placeat rerum culpa temporibus neque? Inventore odit similique suscipit voluptates. Lorem ipsum
                                    dolor
                                </div>
                            </div>
                            <Button className='buttonCard' redirection='/' text='READ MORE' scrollTop={true}></Button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="blog-slider wow animate__animated animate__fadeInRight">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide animate__animated animate__fadeIn">

                        <div className="blog-slider__img secondCardImage">
                            <div className="cardIndex">
                                <img src={images.hikings2} className="card-img rounded" alt="Fortuna Waterfall" />
                                <div className="card-img-overlay blog-slider__card">
                                    <h1 className="card-title tituloImageCard ">It's Not The Mountain We Conquer</h1>
                                    <p className="card-text textImageCard">But Ourselves</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div className="blog-slider__content secondCardContent">
                            <div className='blog-slider__content-content'>
                                <div className="blog-slider__title animate-charcter"><h1>Hikings</h1></div>
                                <span className="blog-slider__code">{`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`}</span>

                                <div className="blog-slider__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum recusandae doloremque, magnam officiis ipsum
                                    sint voluptatum architecto quos quibusdam velit! Placeat rerum culpa temporibus neque? Inventore odit similique suscipit voluptates. Lorem ipsum
                                    dolor 
                                </div>
                            </div>
                            <Button className='buttonCard' redirection='/' text='READ MORE' scrollTop={true}></Button>
                        </div>





                    </div>
                </div>
            </div>


        </div>
    )
}
