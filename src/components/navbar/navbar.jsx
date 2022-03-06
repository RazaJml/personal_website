import React from 'react'
import './navbar.styles.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <h3 className='logo'>
                Ali 
                <span> Raza </span>
                Jamil.
            </h3>
        </div>
        <div className='sidebar-toggle-btn-container'>
            <div className='toggle-btn'>
                <div className="toggle-btn-side-1"></div>
                <div className="toggle-btn-side-2"></div>
                <div className="toggle-btn-side-3"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar