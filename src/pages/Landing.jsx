import React from 'react';
import CarouselLanding from '../components/CarouselLanding';

import NavBar from '../components/NavBar';

const imageBg = "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg002_rw3qet.jpg"
function Landing() {
  return (
    <div >
        <NavBar/>
        <CarouselLanding/>   

    </div>
  )
}

export default Landing