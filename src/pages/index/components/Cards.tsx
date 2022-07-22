import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import * as images from '../../../assets/images/Images';

export const Cards = () => {
    const [date, setDate] = useState<Date>(new Date());
    return (
        <div className='container '>

            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            <div className="card">
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
                                    dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                </div>
                            </div>
                            <NavLink className="blog-slider__button" to="/">READ MORE</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
