import { useState } from 'react'
import { FaHiking, FaWpexplorer } from 'react-icons/fa';
import { GiHiking, GiMountainRoad, GiRiver } from 'react-icons/gi';
import { MdKayaking, MdNaturePeople } from 'react-icons/md';
import { TbKayak } from 'react-icons/tb';
import * as images from '../../../assets/images/Images';
import { Button } from '../../../components/Button/Button';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Cards = () => {





    return (
        <div className='containerCard'>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div className="blog-slider">
                    <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">
                            <div className="blog-slider__img">
                                <div className="cardIndex">
                                    <img src={images.rafting1} className="card-img rounded" alt="..." />
                                    <div className="card-img-overlay blog-slider__card">
                                        {/* <h1 className="card-title tituloImageCard ">Adventure is waiting</h1> */}
                                        <p className="card-text"></p>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-slider__content">
                                <div className='blog-slider__content-content'>
                                    <div className="blog-slider__title animate-charcter"><h1>Adventure</h1></div>
                                    <div className="blog-slider__code">
                                        <span className="cards__icons">{<GiRiver />}</span>
                                        <span className="cards__icons">{<MdKayaking />}</span>
                                        <span className="cards__icons">{<TbKayak />}</span>
                                    </div>

                                    <div className="blog-slider__text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum recusandae doloremque, magnam officiis ipsum
                                        sint voluptatum architecto quos quibusdam velit! Placeat rerum culpa temporibus neque? Inventore odit similique suscipit voluptates. Lorem ipsum
                                        dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                    </div>
                                </div>
                                <Button className='buttonCard' scrollTop={true} text='READ MORE' redirection='Rafting' />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRight">

                <div className="blog-slider">
                    <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">

                            <div className="blog-slider__img secondCardImage">
                                <div className="cardIndex">
                                    <img src={images.catarata_fortuna08} className="card-img rounded" alt="Fortuna Waterfall" />
                                    <div className="card-img-overlay blog-slider__card">
                                        {/* <h1 className="card-title tituloImageCard ">It's Not The Mountain We Conquer</h1>
                                        <p className="card-text textImageCard">But Ourselves</p> */}
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-slider__content secondCardContent">
                                <div className='blog-slider__content-content'>
                                    <div className="blog-slider__title animate-charcter"><h1>Hikings</h1></div>
                                    <div className="blog-slider__code">
                                        <span className="cards__icons">{<FaHiking />}</span>
                                        <span className="cards__icons">{<FaWpexplorer />}</span>
                                        <span className="cards__icons">{<MdNaturePeople />}</span>
                                        <span className="cards__icons">{<GiMountainRoad />}</span>
                                    </div>

                                    <div className="blog-slider__text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum recusandae doloremque, magnam officiis ipsum
                                        sint voluptatum architecto quos quibusdam velit! Placeat rerum culpa temporibus neque? Inventore odit similique suscipit voluptates. Lorem ipsum
                                        dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                    </div>
                                </div>
                                <Button scrollTop={true} className='buttonCard' text='READ MORE' redirection='RioCeleste' />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>



        </div>
    )
}
