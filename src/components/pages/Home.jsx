import React, { useRef, useState } from 'react';
import Typing from '../utils/Typing'
import './Home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, EffectCards } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { red } from '@mui/material/colors';

import zorro from "../../assets/zorro.png"
import wildSvg from "../../assets/wild-life.svg"
import portraitSvg from "../../assets/portrait.svg"

import wild1 from "../../assets/wild-life/wild-1.jpg"

function Home() {
    return (
        <div>
            <main className='main'>
                <Typing
                    texts={["ZORRO CLICKS", "NAVINDU JAYASEKARA"]}
                />
                <p className='main__desc'>I wield my camera as a painter's brush, transforming the ordinary into the extraordinary and
                    inviting the viewer on a journey of renewed discovery and appreciation.</p>
                <img src={zorro} className='main__img' />
                <div className='deco pink-deco'></div>
                <div className='deco aqua-deco'></div>
                <a href="" className="link main__connect">
                    <h3>Let's Connect </h3> <DoubleArrowIcon />
                </a>
            </main>
            <div className='mask'></div>
            <div className="wild">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    navigation
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="wild-life"
                >
                    <SwiperSlide>
                        <img src={wild1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper>

                <h1 className='caption'>Wild Life Photography</h1>
                <object className='wave' type='image/svg+xml' data={wildSvg}></object>
            </div>
            <div className='portrait-wrapper'>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    navigation
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="portrait"
                >
                    <SwiperSlide>
                        <img src={wild1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper>
                <h1 className='caption1'>Portrait Photography</h1>
                <object className='wave' type='image/svg+xml' data={portraitSvg}></object>

            </div>
        </div >
    )
}

export default Home