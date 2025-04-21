import React from 'react'
import '../HeroSection.css'
import profile from '../assets/bg.png' 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hello!</h1>
        <h2>I Am <span className="highlight">Herry Jason</span></h2>
        <p>
          I'm a Web Developer with extensive experience for over 5 years.
          My expertise is to create and design websites, graphics and many more...
        </p>
        <button className="portfolio-button">SEE PORTFOLIO</button>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  )
}

export default HeroSection
