import React from 'react';
import Gallery from '../gallery/gallery';
import Hero from '../hero_section/hero';
import AboutMe from '../more_about_me.jsx/aboutme';
import './home.style.css'


function Home() {
  return (
    <div className="home">
      <Hero />  
      <AboutMe />
      <Gallery />  
    </div>
  )
}

export default Home