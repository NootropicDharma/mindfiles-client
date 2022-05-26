import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
    <div className='hero-container'>
        <video src='/videos/video.mp4' autoPlay loop muted />
        <h1>Unlock your mind's power</h1>
        <p>a vault for the imagination</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Enter vault
            </Button>
            
        </div>
    </div>
    )
}

export default HeroSection