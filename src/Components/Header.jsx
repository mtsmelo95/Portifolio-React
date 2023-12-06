import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="options-header">
            <nav>
                <a href="#Projects" className="nav-links">Projects</a>
                <a href="#AboutMe" className="nav-links">About me</a>
                <a href="#Contact" className="nav-links">Contact</a>
            </nav>
        </div>
    </header>
  )
}

export default Header

