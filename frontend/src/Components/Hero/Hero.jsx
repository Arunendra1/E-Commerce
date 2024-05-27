import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import girl_img from '../Assets/girl_pic.png';
import arrow_icon from '../Assets/arrow_icon.png';

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={girl_img} alt="" />
        </div>
    </div>
  )
}