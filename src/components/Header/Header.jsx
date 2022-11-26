import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeadSocials from './headSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Humam</h1>
        <h5 className="text-light">
          Developer & Designer
        </h5>
        <CTA />
        <HeadSocials/>
        <div className="me glass-effect">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>  
    </header>
  )
}

export default Header