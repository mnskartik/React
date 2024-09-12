import React from 'react'

function Header() {
  return (
    
        <header className="header">
          <div className="logo"><img src="logo.png" alt="logo" className="logo-image" /></div>
          <nav className="nav">
            <a href="#about">About Us</a>
            <a href="#impact">Our Impact</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#success-stories">Success Stories</a>
            <a href="#get-involved">Get Involved</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </header>
      
  )
}

export default Header