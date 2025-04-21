import React from 'react'
import '../Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Herry</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Portfolio</a>
        <a href="#">Resume</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header
