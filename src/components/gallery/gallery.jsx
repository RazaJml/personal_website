import React from 'react'
import './style.css'
import Raza1 from '../../images/raza.jpeg'
import Raza2 from '../../images/raza2.jpeg'
import Raza3 from '../../images/raza3.jpeg'
import Raza4 from '../../images/raza4.jpeg'
import Raza5 from '../../images/raza5.jpeg'
import Raza6 from '../../images/raza6.jpeg'


function Gallery() {
  return (
    <div className='gallery'>
        <h1>Photo Gallery</h1>
        <br />
        <div className="photos_container">
            <div style={{backgroundImage: `url(${Raza4})`}} className="photo"></div>    
            <div style={{backgroundImage: `url(${Raza1})`}} className="photo"></div>
            <div style={{backgroundImage: `url(${Raza2})`}} className="photo"></div>    
            <div style={{backgroundImage: `url(${Raza3})`}} className="photo"></div>
            <div style={{backgroundImage: `url(${Raza5})`}} className="photo"></div>    
            <div style={{backgroundImage: `url(${Raza6})`}} className="photo"></div>  
        </div>
    </div>
  )
}

export default Gallery