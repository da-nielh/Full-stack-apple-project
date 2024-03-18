import React from 'react'
import Alart from './Sections/Alart'
import First from './Sections/First'
import Second from './Sections/Second'
import Third from './Sections/Third'
import Fourth from './Sections/Fourth'
import Fifth from './Sections/Fifth'
import Sixth from './Sections/Sixth'
// import Carousel from './Sections/Carousel';
import Youtube from './Sections/Youtube'
import Additional from './Sections/Additional'

function Main() {
  return (
    <div>
        
        <Alart />
        <Additional/>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Youtube/>

        
        {/* <Carousel/> */}
    </div>
  )
}

export default Main