import React from 'react'
import Typing from '../utils/Typing'
import './Home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function Home() {
    return (
        <div>
            <main className='main'>
                <Typing
                    texts={["ZORRO CLICKS", "NAVINDU JAYASEKARA"]}
                />
                <p className='main__desc'>I wield my camera as a painter's brush, transforming the ordinary into the extraordinary and
                    inviting the viewer on a journey of renewed discovery and appreciation.</p>
                <img src="/src/assets/zorro.png" className='main__img' />
                <div className='deco pink-deco'></div>
                <div className='deco aqua-deco'></div>
                <a href="" className="link main__connect">
                    <h3>Let's Connect </h3> <DoubleArrowIcon />
                </a>
            </main>
            <div className='mask'></div>
        </div >
    )
}

export default Home