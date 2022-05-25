import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { AspectRatio } from '@chakra-ui/react'

function Cards() {
    return (
    <div className='cards'>
        <h1><strong>Explore the hidden parts inside your mind</strong></h1>
            
            
                <AspectRatio maxW='450px' ratio={1}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/xsqzzW3Yl28'
                        allowFullScreen
                        />
                </AspectRatio>
            
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem className='cardis'
                        
                        src='/images/cmW4PHNcoSYUL8f1rky5Qsn6.png'
                        text="The science behind loci-Mind Palace and The RAS"
                        lable='Adventure'
                        path='/services'
                    />
                    
                    
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards