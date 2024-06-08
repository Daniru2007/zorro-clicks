import React, { useRef, useState } from 'react';
import Typing from '../utils/Typing'
import './Home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { red } from '@mui/material/colors';

import zorro from "../../assets/zorro.png"

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
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
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
            </div>
        </div >
    )
}

export default Home