import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCaros.js'

function MainCarousel() {
    
    const items = MainCarouselData.map((img)=> (
            
                <img src={img.image} />
                ))
                // this items wants array of div s 
                //https://maxmarinich.github.io/react-alice-carousel/#stage-padding
    
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        
        controlsStrategy="alternate"
        disableButtonsControls
        
        autoPlay
        autoPlayInterval={2000}
        infinite
        
    />
  )
}

export default MainCarousel
